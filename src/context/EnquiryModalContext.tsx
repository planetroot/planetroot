"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface EnquiryInitialData {
  destination?: string;
  resortOrProperty?: string;
  stayType?: string;
  tripType?: string;
  budget?: string;
  budgetBasis?: "Entire Stay" | "Per Night";
}

interface EnquiryModalContextType {
  isOpen: boolean;
  initialData: EnquiryInitialData;
  openEnquiryModal: (data?: EnquiryInitialData) => void;
  closeEnquiryModal: () => void;
}

const EnquiryModalContext = createContext<EnquiryModalContextType | undefined>(undefined);

export function EnquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState<EnquiryInitialData>({});

  const openEnquiryModal = (data: EnquiryInitialData = {}) => {
    setInitialData(data);
    setIsOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsOpen(false);
  };

  return (
    <EnquiryModalContext.Provider
      value={{
        isOpen,
        initialData,
        openEnquiryModal,
        closeEnquiryModal,
      }}
    >
      {children}
    </EnquiryModalContext.Provider>
  );
}

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext);
  if (!context) {
    throw new Error("useEnquiryModal must be used within an EnquiryModalProvider");
  }
  return context;
}
