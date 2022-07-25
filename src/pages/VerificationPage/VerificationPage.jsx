import "./VerificationPage.css";
import { useNavigate } from "react-router-dom";

const VerificationPage = () => {
  const navigate = useNavigate();

  const otpSubmiter = (e) => {
    e.preventDefault();
    navigate("/step-one");
  };
  return (
    <>
      <form onSubmit={otpSubmiter}>
        <button type="submit" className="next-btn-login">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div className="otp-container">
          <div className="text-asking-otp">Enter the OTP</div>
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            required
          />
          <div className="resend-code">Resend code</div>
        </div>
      </form>
    </>
  );
};

export { VerificationPage };
