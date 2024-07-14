import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PaymentProvider } from "./context/paymentContext.tsx";
import { ContainerApp } from "./components/containerApp.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PaymentProvider>
        <ContainerApp>
          <App />
        </ContainerApp>
      </PaymentProvider>
    </BrowserRouter>
  </React.StrictMode>
);
