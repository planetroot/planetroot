import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface EnquiryPayload {
  fullName: string;
  phone: string;
  email: string;
  destination: string;
  resortOrPackage?: string;
  dates: string;
  guests: string;
  budget?: string;
  specialRequirements?: string;
  submissionId?: string;
}

// In-memory set for deduplication of repeated requests within a session
const recentSubmissions = new Set<string>();

export async function POST(request: NextRequest) {
  try {
    const body: EnquiryPayload = await request.json();

    // 1. Validation
    const errors: Record<string, string> = {};

    if (!body.fullName || body.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (minimum 2 characters).";
    }

    const cleanPhone = (body.phone || "").replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit mobile number for communication.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!body.destination || body.destination.trim() === "") {
      errors.destination = "Please select or specify your preferred destination.";
    }

    if (!body.dates || body.dates.trim() === "") {
      errors.dates = "Please specify your intended travel dates or season.";
    }

    if (!body.guests || body.guests.trim() === "") {
      errors.guests = "Please provide the estimated number of guests.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Please review the form errors and try again.",
          errors,
        },
        { status: 422 }
      );
    }

    // 2. Duplicate prevention
    const dedupeKey = `${body.email.trim().toLowerCase()}_${cleanPhone}_${body.destination}_${body.dates}`;
    if (recentSubmissions.has(dedupeKey)) {
      return NextResponse.json(
        {
          success: false,
          message: "A reservation enquiry with these exact details was recently submitted. Our travel specialist is already reviewing your request.",
          isDuplicate: true,
        },
        { status: 409 }
      );
    }
    recentSubmissions.add(dedupeKey);
    // Auto-clear key after 10 minutes to allow re-submission if user changes mind
    setTimeout(() => recentSubmissions.delete(dedupeKey), 10 * 60 * 1000);

    // 3. Generate unique enquiry reference code
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const referenceCode = `PR-${dateStr}-${randomHex}`;

    const enquiryRecord = {
      referenceCode,
      createdAt: new Date().toISOString(),
      fullName: body.fullName.trim(),
      phone: cleanPhone,
      email: body.email.trim().toLowerCase(),
      destination: body.destination.trim(),
      resortOrPackage: body.resortOrPackage?.trim() || "Not specified",
      dates: body.dates.trim(),
      guests: body.guests.trim(),
      budget: body.budget?.trim() || "Flexible luxury",
      specialRequirements: body.specialRequirements?.trim() || "None noted",
      source: "Planet Root Web Portal",
    };

    // 4. Persistence to local filesystem if writable
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const filePath = path.join(dataDir, "enquiries.json");
      let existing: unknown[] = [];
      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, "utf-8");
          existing = JSON.parse(raw);
        } catch {
          existing = [];
        }
      }
      existing.unshift(enquiryRecord);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), "utf-8");
    } catch (fsErr) {
      // In serverless read-only contexts (Vercel), file write might fail silently; log safely
      console.log("[Enquiry Stored in Memory]:", enquiryRecord);
    }

    return NextResponse.json(
      {
        success: true,
        referenceCode,
        message: "Your holiday enquiry has been successfully registered with Planet Root.",
        details: {
          clientName: enquiryRecord.fullName,
          destination: enquiryRecord.destination,
          dates: enquiryRecord.dates,
          estimatedResponseTime: "Within 4 to 6 business hours",
          advisorContact: "+91 9605990306",
          email: "planetroot98@gmail.com",
        },
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal processing error";
    return NextResponse.json(
      {
        success: false,
        message: "We encountered an issue recording your escape plan. Please reach out to us directly at +91 9605990306 or planetroot98@gmail.com.",
        error: errorMsg,
      },
      { status: 500 }
    );
  }
}
