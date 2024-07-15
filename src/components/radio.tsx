import React from "react";
import BannerPromotion from "../assets/banner-promotion";
import IconChecked from "../assets/icon-checked";
import BallonRadio from "./ballon-radio";
import { PaymentPropsType } from "../context/paymentContext";
import { formattedValue } from "../helper/formattedValue";

interface RadioOptionProps {
  option: PaymentPropsType;
  selectedOption: string | null;
  onOptionChange: (payment: PaymentPropsType) => void;
}

const RadioOption: React.FC<RadioOptionProps> = ({
  option,
  selectedOption,
  onOptionChange,
}) => {
  const isChecked = selectedOption === option.id;
  const isFirst = option.installments === 1 && "mb-8 shadow rounded-lg";
  const isSecond = option.installments === 2 && "rounded-t-lg";
  const isLast = option.installments === 7 && "rounded-b-lg";
  const selected = isChecked
    ? "border-woovi bg-woovi bg-opacity-15"
    : "border-gray-300";

  return (
    <label
      htmlFor={option.id}
      className={`relative flex flex-col items-start cursor-pointer w-full border p-5 max-w-sm ${isFirst} ${isSecond} ${isLast} ${selected}`}
      onClick={() => onOptionChange(option)}
    >
      {option.installments === 1 && <BallonRadio>Pix</BallonRadio>}
      {option.installments === 2 && <BallonRadio>Pix Parcelado</BallonRadio>}

      <input
        id={option.id}
        type="radio"
        name="installments"
        className="hidden"
        checked={isChecked}
        onChange={() => onOptionChange(option)}
      />

      <div className="relative flex items-start w-full justify-between">
        <div>
          <div className="text-2xl font-semibold">
            <span className="font-bold">{option.installments}x</span> de{" "}
            {formattedValue(option.valueInstallment)}
          </div>
          {option.installments === 1 ? (
            <p className="text-woovi">
              Ganhe <strong>3%</strong> de Cashback
            </p>
          ) : (
            <div className="text-sm text-gray-500">
              Total: {formattedValue(option.total)}
            </div>
          )}
        </div>
        <div className="flex items-center">
          <div
            className={`w-6 h-6 rounded-full ${
              isChecked ? "bg-gray-300" : "border-2 border-gray-300"
            } flex items-center justify-center`}
          >
            {isChecked && <IconChecked />}
          </div>
        </div>
      </div>
      {option.promotion && (
        <div className="relative h-8 flex items-center w-full">
          <BannerPromotion />
          <span className="relative max-[320px]:text-xs text-sm max-[320px]:px-1 px-3 text-white">
            {option.promotion}
          </span>
        </div>
      )}
    </label>
  );
};

export default RadioOption;
