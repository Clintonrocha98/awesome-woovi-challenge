import { useState } from "react";
import { PaymentPropsType } from "../context/paymentContext";
import optionsInstallmentsData from "../mock/optionsInstallments.json";
import RadioOption from "../components/radio";
import TitlePage from "../components/title-page";
import usePaymentContext from "../hook/usePaymentContext";

const optionsInstallments: PaymentPropsType[] = optionsInstallmentsData;

export default function PaymentOptions() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { updateOptionPayment } = usePaymentContext();

  const handleOptionChange = (payment: PaymentPropsType) => {
    updateOptionPayment(payment);
    setSelectedOption(payment.id);
  };

  return (
    <div>
      <TitlePage>João, como você quer pagar?</TitlePage>

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
      <a href="/pix">pix page aaaaaaaaaaaaaaaaaaaa</a>
    </div>
  );
}
