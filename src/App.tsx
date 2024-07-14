import { useState } from "react";
import usePaymentContext from "./hook/usePaymentContext";
import { PaymentPropsType } from "./context/paymentContext";
import LogoWoovi from "./assets/logo-woovi";
import IconFooter from "./assets/icon-footer";
import RadioOption from "./components/radio";
import optionsInstallmentsData from "./mock/optionsInstallments.json";

const optionsInstallments: PaymentPropsType[] = optionsInstallmentsData;

function App() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { setPayment } = usePaymentContext();

  const handleOptionChange = (payment: PaymentPropsType) => {
    setSelectedOption(payment.id);
    setPayment(payment);
  };
  return (
    <section className="max-w-3xl m-auto font-nunito">
      <header className="flex align-center justify-center flex-col items-center">
        <div className="m-10">
          <LogoWoovi />
        </div>

        <h1 className=" my-8 text-2xl font-extrabold text-center">
          João, como você quer pagar?
        </h1>
      </header>
      <form className="flex flex-col items-center px-2 mb-5">
        {optionsInstallments.map((option) => (
          <RadioOption
            key={option.id}
            option={option}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />
        ))}
      </form>
      <footer className="flex justify-center mb-3">
        <IconFooter />
      </footer>
    </section>
  );
}

export default App;
