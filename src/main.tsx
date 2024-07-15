import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { PaymentProvider } from "./context/paymentContext.tsx";
import { ContainerApp } from "./components/containerApp.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PaymentProvider>
      <ContainerApp>
        <RouterProvider router={router} />
      </ContainerApp>
    </PaymentProvider>
  </React.StrictMode>
);
