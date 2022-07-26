import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  VerificationPage,
  StepOnePage,
  StepTwoPage,
  StepThreePage,
} from "./pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/OTP-verification" element={<VerificationPage />} />

        <Route path="/step-one" element={<StepOnePage />} />

        <Route path="/step-two" element={<StepTwoPage />} />
        <Route path="/step-three" element={<StepThreePage />} />
      </Routes>
      <ToastContainer />
      <div className="wave">
        <img src="./assets/wave.svg" alt="error" />
      </div>
    </>
  );
}

export default App;
