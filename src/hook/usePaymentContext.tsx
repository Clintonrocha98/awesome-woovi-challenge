import { useContext } from "react";
import { PaymentContext, PaymentContextType } from "../context/paymentContext";

export default function usePaymentContext(): PaymentContextType {
  const context = useContext(PaymentContext);

  if (context === undefined) {
    throw new Error("PaymentContext must be used within a PaymentProvider");
  }

  return context;
}
