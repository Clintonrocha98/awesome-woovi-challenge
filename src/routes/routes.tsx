import { createBrowserRouter } from "react-router-dom";
import PaymentOptions from "../pages/paymentOptions";
import PaymentPix from "../pages/paymentPix";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PaymentOptions />,
  },
  {
    path: "/pix",
    element: <PaymentPix />,
  },
]);
