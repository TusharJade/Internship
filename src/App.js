import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  LandingPage,
  VerificationPage,
  StepOnePage,
  StepTwoPage,
} from "./pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/OTP-verification" element={<VerificationPage />} />
        <Route path="/step-one" element={<StepOnePage />} />
        <Route path="/step-two" element={<StepTwoPage />} />
      </Routes>
      <div className="wave">
        <img src="./assets/wave.svg" alt="error" />
      </div>
    </>
  );
}

export default App;
