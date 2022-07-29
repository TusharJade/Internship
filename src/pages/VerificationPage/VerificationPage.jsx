import "./VerificationPage.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth";
import { useDataContext } from "../../context/all-data";

const VerificationPage = () => {
  const { setAuthState, setUpRecaptch } = useAuthContext();

  const { storedDataState, storedDataDispatch } = useDataContext();

  const [otp, setOtp] = useState({
    boxOne: "",
    boxTwo: "",
    boxThree: "",
    boxFour: "",
    boxFive: "",
    boxSix: "",
  });

  const finalOtp =
    otp.boxOne +
    otp.boxTwo +
    otp.boxThree +
    otp.boxFour +
    otp.boxFive +
    otp.boxSix;

  const navigate = useNavigate();

  const otpSubmitter = async (e) => {
    e.preventDefault();
    try {
      await storedDataState.verificationResponse.confirm(finalOtp);
      toast.success("OTP is verified", { autoClose: 2000 });
      setAuthState((item) => ({ ...item, stepOne: true }));
      navigate("/step-one");
    } catch (error) {
      toast.warning("OTP is wrong please re-enter OTP", { autoClose: 2000 });
    }
  };

  const resendOtp = async () => {
    try {
      const response = await setUpRecaptch(storedDataState.mobNumber);
      storedDataDispatch({
        type: "VERIFICATION_RESPONSE",
        payload: response,
      });
      toast.success("OTP has sended again", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.warning(error.message, { autoClose: 2000 });
    }
  };
  return (
    <>
      <form onSubmit={otpSubmitter}>
        <button type="submit" className="next-btn-login">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <div className="otp-container">
          <div className="text-asking-otp">Enter the OTP</div>
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, boxOne: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, boxTwo: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, boxThree: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, boxFour: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, boxFive: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, boxSix: e.target.value }))
            }
            required
          />
          <div id="recaptcha-container" />
          <div className="resend-code" onClick={() => resendOtp()}>
            Resend code
          </div>
        </div>
      </form>
    </>
  );
};

export { VerificationPage };
