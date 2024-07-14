import { Route, Routes } from "react-router-dom";
import PaymentOptions from "./pages/paymentOptions";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PaymentOptions />} />
      </Routes>
    </div>
  );
}

export default App;
