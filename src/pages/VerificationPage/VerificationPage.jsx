import "./VerificationPage.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth";
import { useState } from "react";
import { useDataContext } from "../../context/all-data";
import { async } from "@firebase/util";

const VerificationPage = () => {
  const { storedDataState } = useDataContext();
  const { setAuthState } = useAuthContext();

  const [otp, setOtp] = useState({
    boxOne: "",
    boxTwo: "",
    boxThree: "",
    boxFour: "",
    boxFive: "",
    boxSix: "",
  });

  const navigate = useNavigate();

  const otpSubmitter = async (e) => {
    const finalOtp =
      otp.boxOne +
      otp.boxTwo +
      otp.boxThree +
      otp.boxFour +
      otp.boxFive +
      otp.boxSix;
    e.preventDefault();
    try {
      const response = storedDataState.verificationResponse;
      response.confirm(finalOtp);
      toast.success("OTP is verified", { autoClose: 2000 });
      setAuthState((item) => ({ ...item, stepOne: true }));
      navigate("/step-one");
    } catch (error) {
      console.log(error);
    }
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
            onChange={(e) =>
              setOtp((item) => ({ ...item, otpOne: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, otpTwo: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, otpThree: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, otpFour: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, otpFive: e.target.value }))
            }
            required
          />
          <input
            className="single-input-boxes"
            pattern="[0-9]"
            type="text"
            maxLength="1"
            onChange={(e) =>
              setOtp((item) => ({ ...item, otpSix: e.target.value }))
            }
            required
          />
          <div className="resend-code">Resend code</div>
        </div>
      </form>
    </>
  );
};

export { VerificationPage };
