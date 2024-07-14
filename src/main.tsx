import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PaymentProvider } from "./context/paymentContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PaymentProvider>
      <App />
    </PaymentProvider>
  </React.StrictMode>
);
