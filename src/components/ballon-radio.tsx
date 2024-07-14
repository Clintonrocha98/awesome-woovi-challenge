import React, { ReactNode } from "react";

interface BallonRadioProps {
  children: ReactNode;
}

const BallonRadio: React.FC<BallonRadioProps> = ({ children }) => {
  return (
    <span className="absolute top-[-12px] rounded-lg bg-gray-300 px-3 font-bold">
      {children}
    </span>
  );
};

export default BallonRadio;
