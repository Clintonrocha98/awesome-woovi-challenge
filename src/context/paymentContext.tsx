import { useState, createContext } from "react";

type PropType = {
  children: React.ReactNode;
};
export type PaymentPropsType = {
  id: string;
  installments: number;
  valueInstallment: number;
  total: number;
  promotion?: string | null;
};

type PaymentContextType = {
  payment: PaymentPropsType | null;
  setPayment: React.Dispatch<React.SetStateAction<PaymentPropsType | null>>;
};

export const PaymentContext = createContext({} as PaymentContextType);

export function PaymentProvider({ children }: PropType) {
  const [payment, setPayment] = useState<PaymentPropsType | null>(null);

  return (
    <PaymentContext.Provider value={{ payment, setPayment }}>
      {children}
    </PaymentContext.Provider>
  );
}
