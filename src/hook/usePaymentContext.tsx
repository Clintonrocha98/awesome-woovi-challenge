import { useContext } from "react";
import { PaymentContext } from "../context/paymentContext";

export default function usePaymentContext() {
  const context = useContext(PaymentContext);

  if (!context) {
    throw new Error("is not within the context");
  }

  return context;
}
