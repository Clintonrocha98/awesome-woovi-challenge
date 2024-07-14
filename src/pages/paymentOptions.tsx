import { useState } from "react";
import { PaymentPropsType } from "../context/paymentContext";
import optionsInstallmentsData from "../mock/optionsInstallments.json";
import usePaymentContext from "../hook/usePaymentContext";
import RadioOption from "../components/radio";

const optionsInstallments: PaymentPropsType[] = optionsInstallmentsData;

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { setPayment } = usePaymentContext();

  const handleOptionChange = (payment: PaymentPropsType) => {
    setSelectedOption(payment.id);
    setPayment(payment);
  };
  return (
    <div>
      <h1 className=" my-8 text-2xl font-extrabold text-center">
        João, como você quer pagar?
      </h1>
      <div className="flex flex-col items-center px-2 mb-5">
        {optionsInstallments.map((option) => (
          <RadioOption
            key={option.id}
            option={option}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
