import { useState, createContext, useEffect } from "react";
import { PropType } from "../types/childrenPropType";

export type PaymentPropsType = {
  id: string;
  installments: number;
  valueInstallment: number;
  total: number;
  promotion?: string | null;
};

type Nullable<T> = T | null | undefined;

export type PaymentContextType = {
  payment: Nullable<PaymentPropsType>;
  updateOptionPayment: (option: PaymentPropsType) => void;
};

export const PaymentContext = createContext<PaymentContextType | undefined>(
  undefined
);

export function PaymentProvider({ children }: PropType) {
  const [payment, setPayment] = useState<Nullable<PaymentPropsType>>(() => {
    const storedPayment = localStorage.getItem("payment");
    return storedPayment ? JSON.parse(storedPayment) : null;
  });

  useEffect(() => {
    localStorage.setItem("payment", JSON.stringify(payment));
  }, [payment]);

  const updateOptionPayment = (option: PaymentPropsType) => {
    setPayment(option);
  };

  return (
    <PaymentContext.Provider value={{ payment, updateOptionPayment }}>
      {children}
    </PaymentContext.Provider>
  );
}
