import "./StepThreePage.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../context/auth";
import { useDataContext } from "../../context/all-data";

const jobRolesArray = [
  "Frontend Developer",
  "UI Develope",
  "Backend Developer",
  "Data Scientist",
  "Content Manager",
  "Systems Engineer",
];

const StepThreePage = () => {
  const { authState } = useAuthContext();

  const { storedDataState, storedDataDispatch, postRequest } = useDataContext();

  const [basicInfo, setBasicInfo] = useState({
    jobRole: [],
    jobRoleInput: "",
    jobRoleStatus: false,
  });

  const navigate = useNavigate();

  const stepThreeSubmitter = (e) => {
    e.preventDefault();
    storedDataState.experience.length > 0 && storedDataState.jobRole.length > 0
      ? postRequest(storedDataState)
      : toast.error("Please select job role and experience", {
          position: "top-right",
          autoClose: 2000,
        });
  };
  return (
    <>
      <form onSubmit={stepThreeSubmitter}>
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
          <div className="heading-text">Role you are looking for?</div>
          <div className="role-box-position">
            <input
              className="input-name"
              onChange={(e) =>
                setBasicInfo((item) => ({
                  ...item,
                  jobRoleInput: e.target.value,
                }))
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setBasicInfo((item) => ({
                    ...item,
                    jobRoleInput: "",
                  }));
                  storedDataDispatch({
                    type: "ADD_JOB_ROLE",
                    payload: basicInfo.jobRoleInput,
                  });
                }
              }}
              value={basicInfo.jobRoleInput}
              type="text"
              placeholder="Eg. Web Developer"
            />
            <i
              className="fa-solid fa-angle-down city-selector"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  jobRoleStatus: !item.jobRoleStatus,
                }))
              }
            ></i>
            <div className="role-dropdown-box">
              {basicInfo.jobRoleStatus === true
                ? jobRolesArray.map((item, i) => (
                    <div className="cities-checkbox-container" key={i}>
                      <input
                        className="cities-checkbox"
                        onClick={() =>
                          storedDataState.jobRole.includes(item)
                            ? storedDataDispatch({
                                type: "REMOVE_JOB_ROLE",
                                payload: item,
                              })
                            : storedDataDispatch({
                                type: "ADD_JOB_ROLE",
                                payload: item,
                              })
                        }
                        checked={storedDataState.jobRole.includes(item)}
                        type="checkbox"
                      />
                      <div className="cities-dropdown-box-text">{item}</div>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="added-btn-container">
            {storedDataState.jobRole.map((item, i) => {
              return (
                <div className="added-btn" key={i}>
                  <div>{item}</div>
                  <i
                    className="fa-solid fa-circle-xmark delete-btn"
                    onClick={() =>
                      storedDataDispatch({
                        type: "REMOVE_JOB_ROLE",
                        payload: item,
                      })
                    }
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="top-citys-text">Top cities you may prefer:</div>
          <div className="job-rols-container">
            <div
              className="job-btns"
              onClick={() =>
                storedDataDispatch({
                  type: "ADD_JOB_ROLE",
                  payload: "Frontend Developer",
                })
              }
            >
              Frontend Developer
            </div>
            <div
              className="job-btns"
              onClick={() =>
                storedDataDispatch({
                  type: "ADD_JOB_ROLE",
                  payload: "Backend Developer",
                })
              }
            >
              Backend Developer
            </div>
            <div
              className="job-btns"
              onClick={() =>
                storedDataDispatch({
                  type: "ADD_JOB_ROLE",
                  payload: "Data Scientist",
                })
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
              className={`job-btns ${
                storedDataState.experience === "Fresher"
                  ? "checked-experience"
                  : ""
              }`}
              onClick={() =>
                storedDataDispatch({ type: "EXPERIENCE", payload: "Fresher" })
              }
            >
              Fresher
            </div>
            <div
              className={`job-btns ${
                storedDataState.experience === "1-3 years"
                  ? "checked-experience"
                  : ""
              }`}
              onClick={() =>
                storedDataDispatch({ type: "EXPERIENCE", payload: "1-3 years" })
              }
            >
              1-3 years
            </div>
            <div
              className={`job-btns ${
                storedDataState.experience === "3-6 years"
                  ? "checked-experience"
                  : ""
              }`}
              onClick={() =>
                storedDataDispatch({ type: "EXPERIENCE", payload: "3-6 years" })
              }
            >
              3-6 years
            </div>
            <div
              className={`job-btns ${
                storedDataState.experience === "6+ years"
                  ? "checked-experience"
                  : ""
              }`}
              onClick={() =>
                storedDataDispatch({ type: "EXPERIENCE", payload: "6+ years" })
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
