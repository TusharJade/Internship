import "./StepThreePage.css";
import { useState } from "react";
import { useDataContext } from "../../context/all-data";

const StepThreePage = () => {
  const { storedDataState, storedDataDispatch } = useDataContext();

  const [basicInfo, setBasicInfo] = useState({ jobRole: "", experience: "" });

  const stepThreeSubmitter = (e) => {
    e.preventDefault();
    storedDataDispatch({ type: "STEP_THREE_SUBMISSION", payload: basicInfo });
  };
  return (
    <>
      <form onSubmit={stepThreeSubmitter}>
        <button type="submit" className="next-btn-login">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div className="steps-container">
          <div className="help-use-text">Help us know you better!</div>
          <div className="all-btn-container">
            <button className="step-btns active-btn">1</button>
            <div className="line-break">-----</div>
            <button className="step-btns active-btn">2</button>
            <div className="line-break">-----</div>
            <button className="step-btns active-btn">3</button>
          </div>
        </div>
        <div className="steps-container">
          <div className="heading-text">Role you are looking for?</div>
          <input
            className="input-name"
            onChange={(e) =>
              setBasicInfo((item) => ({ ...item, jobRole: e.target.value }))
            }
            value={basicInfo.jobRole}
            type="text"
            placeholder="Eg. Web Developer"
            required
          />
          <select
            className="job-role-selector"
            onChange={(e) =>
              setBasicInfo((item) => ({ ...item, jobRole: e.target.value }))
            }
          >
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="UI Developer">UI Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Data Scientist">Data Scientist</option>
            <option value="Content Manager">Content Manager</option>
            <option value="Systems Engineer">Systems Engineer </option>
          </select>
          <div className="top-citys-text">Top cities you may prefer:</div>
          <div className="job-rols-container">
            <div
              className="job-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  jobRole: "Frontend Developer",
                }))
              }
            >
              Frontend Developer
            </div>
            <div
              className="job-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  jobRole: "Backend Developer",
                }))
              }
            >
              Backend Developer
            </div>
            <div
              className="job-btns"
              onClick={() =>
                setBasicInfo((item) => ({ ...item, jobRole: "Data Scientist" }))
              }
            >
              Data Scientist
            </div>
          </div>
          <div className="experience-heading">
            How many years of work experience?
          </div>
          <div className="experience-container">
            <div
              className="job-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  experience: "Fresher",
                }))
              }
            >
              Fresher
            </div>
            <div
              className="job-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  experience: "1-3 years",
                }))
              }
            >
              1-3 years
            </div>
            <div
              className="job-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  experience: "3-6 years",
                }))
              }
            >
              3-6 years
            </div>
            <div
              className="job-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  experience: "6+ years",
                }))
              }
            >
              6+ years
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { StepThreePage };
