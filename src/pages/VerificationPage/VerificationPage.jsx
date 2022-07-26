import "./VerificationPage.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth";

const VerificationPage = () => {
  const { setAuthState } = useAuthContext();
  const navigate = useNavigate();

  const otpSubmitter = (e) => {
    e.preventDefault();
    toast.success("OTP is verified", { autoClose: 2000 });
    setAuthState((item) => ({ ...item, stepOne: true }));
    navigate("/step-one");
  };
  return (
    <>
      <form onSubmit={otpSubmitter}>
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
