import "./StepOnePage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/all-data";

const StepOnePage = () => {
  const { storedDataDispatch } = useDataContext();

  const [basicInfo, setBasicInfo] = useState({ name: "", gender: "" });

  const navigate = useNavigate();

  const stepOneSubmitter = (e) => {
    e.preventDefault();
    storedDataDispatch({ type: "STEP_ONE_SUBMISSION", payload: basicInfo });
    basicInfo.gender.length === 0
      ? alert("Please choose your gender first")
      : navigate("/step-two");
  };
  return (
    <>
      <form onSubmit={stepOneSubmitter}>
        <button type="submit" className="next-btn-login">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div className="steps-container">
          <div className="help-use-text">Help us know you better!</div>
          <div className="all-btn-container">
            <button className="step-btns active-btn">1</button>
            <div className="line-break">-----</div>
            <button className="step-btns">2</button>
            <div className="line-break">-----</div>
            <button className="step-btns">3</button>
          </div>
        </div>
        <div className="steps-container">
          <div className="heading-text">What should we call you?</div>
          <input
            className="input-name"
            onChange={(e) =>
              setBasicInfo((item) => ({
                ...item,
                name: e.target.value,
              }))
            }
            type="text"
            placeholder="Enter your name"
            required
          />
          <div className="heading-text">Gender</div>
          <div className="gender-container">
            <div
              className="gender-box"
              onClick={() =>
                setBasicInfo((item) => ({ ...item, gender: "male" }))
              }
            >
              <img src="./assets/boy.svg" alt="error" />
              {basicInfo.gender === "male" ? (
                <i class="fa-solid fa-circle-check checked-gender"></i>
              ) : (
                ""
              )}
            </div>
            <div
              className="gender-box"
              onClick={() =>
                setBasicInfo((item) => ({ ...item, gender: "female" }))
              }
            >
              <img src="./assets/girl.svg" alt="error" />
              {basicInfo.gender === "female" ? (
                <i class="fa-solid fa-circle-check checked-gender"></i>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { StepOnePage };
