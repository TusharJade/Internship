import "./LandingPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [number, setNumber] = useState({ phoneNumber: "", numberCode: "91" });

  const navigate = useNavigate();

  const numberSumiter = (e) => {
    e.preventDefault();
    navigate("/OTP-verification");
  };
  return (
    <>
      <form onSubmit={numberSumiter}>
        <button type="submit" className="next-btn-login">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div className="login-container">
          <div className="text-asking-number">Your mobile number?</div>
          <select
            className="input-coutry-code"
            onChange={(e) =>
              setNumber((item) => ({ ...item, numberCode: e.target.value }))
            }
          >
            <option value="91">IN</option>
            <option value="1">USA</option>
            <option value="44">UK</option>
          </select>
          <span className="num-code">(+{number.numberCode})</span>
          <input
            className="mobile-number-input"
            onChange={(e) =>
              setNumber((item) => ({ ...item, phoneNumber: e.target.value }))
            }
            value={number.phoneNumber}
            placeholder="9970703322"
            pattern="[0-9]{10}"
            type="text"
            maxLength="10"
            required
          />
          <label className="checkbox-label" htmlFor="checkbox-verification">
            <input
              id="checkbox-verification"
              className="checkbox-login"
              type="checkbox"
              required
            />
            By checking you confirm that you accept our Terms and conditions and
            have read our Privacy policy
          </label>
        </div>
      </form>
    </>
  );
};

export { LandingPage };
