import "./StepOnePage.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/all-data";
import { useAuthContext } from "../../context/auth";

const StepOnePage = () => {
  const { authState, setAuthState } = useAuthContext();

  const { storedDataState, storedDataDispatch } = useDataContext();

  const [basicInfo, setBasicInfo] = useState("");

  const navigate = useNavigate();

  const stepOneSubmitter = (e) => {
    e.preventDefault();
    if (storedDataState.gender.length === 0) {
      toast.warning("Please choose your gender", { autoClose: 2000 });
    } else {
      navigate("/step-Two");
      toast.success("Step-one form filled", { autoClose: 2000 });
      setAuthState((item) => ({ ...item, stepTwo: true }));
    }
  };
  return (
    <>
      <form onSubmit={stepOneSubmitter}>
        <button type="submit" className="next-btn-login">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <div className="steps-container">
          <div className="help-use-text">Help us know you better!</div>
          <div className="all-btn-container">
            <button
              className={`step-btns ${authState.stepOne ? "active-btn" : null}`}
              onClick={() => (authState.stepOne ? navigate("/step-one") : null)}
            >
              1
            </button>
            <div className="line-break">-----</div>
            <button
              className={`step-btns ${authState.stepTwo ? "active-btn" : null}`}
              onClick={() => (authState.stepTwo ? navigate("/step-two") : null)}
            >
              2
            </button>
            <div className="line-break">-----</div>
            <button
              className={`step-btns ${
                authState.stepThree ? "active-btn" : null
              }`}
              onClick={() =>
                authState.stepThree ? navigate("/step-three") : null
              }
            >
              3
            </button>
          </div>
        </div>
        <div className="steps-container">
          <div className="heading-text">What should we call you?</div>
          <input
            className="input-name"
            onChange={(e) =>
              storedDataDispatch({ type: "ADD_NAME", payload: e.target.value })
            }
            type="text"
            value={storedDataState.name}
            placeholder="Enter your name"
            required
          />
          <div className="heading-text">Gender</div>
          <div className="gender-container">
            <div
              className="gender-box"
              onClick={() =>
                storedDataDispatch({ type: "ADD_GENDER", payload: "male" })
              }
            >
              <img src="./assets/boy.svg" alt="error" />
              {storedDataState.gender === "male" ? (
                <i className="fa-solid fa-circle-check checked-gender"></i>
              ) : null}
            </div>
            <div
              className="gender-box"
              onClick={() =>
                storedDataDispatch({ type: "ADD_GENDER", payload: "female" })
              }
            >
              <img src="./assets/girl.svg" alt="error" />
              {storedDataState.gender === "female" ? (
                <i className="fa-solid fa-circle-check checked-gender"></i>
              ) : null}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { StepOnePage };
