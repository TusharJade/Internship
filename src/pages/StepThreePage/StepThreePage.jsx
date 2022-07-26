import "./StepThreePage.css";
import { useState } from "react";
import { useDataContext } from "../../context/all-data";
import { toast } from "react-toastify";

const jobRolesArray = [
  "Frontend Developer",
  "UI Develope",
  "Backend Developer",
  "Data Scientist",
  "Content Manager",
  "Systems Engineer",
];

const StepThreePage = () => {
  const { storedDataState, storedDataDispatch, postRequest } = useDataContext();

  const [basicInfo, setBasicInfo] = useState({
    jobRole: [],
    experience: "",
    jobRoleInput: "",
    jobRoleStatus: false,
  });

  const stepThreeSubmitter = (e) => {
    e.preventDefault();
    storedDataDispatch({ type: "STEP_THREE_SUBMISSION", payload: basicInfo });
    basicInfo.experience.length > 0 && basicInfo.jobRole.length > 0
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
                    jobRole: [...item.jobRole, item.jobRoleInput],
                  }));
                }
              }}
              value={basicInfo.jobRoleInput}
              type="text"
              placeholder="Eg. Web Developer"
            />
            <i
              class="fa-solid fa-angle-down city-selector"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  jobRoleStatus: !item.jobRoleStatus,
                }))
              }
            ></i>
            <div className="role-dropdown-box">
              {basicInfo.jobRoleStatus === true
                ? jobRolesArray.map((item) => (
                    <div className="cities-checkbox-container">
                      <input
                        className="cities-checkbox"
                        onClick={() =>
                          setBasicInfo((previousItem) => ({
                            ...previousItem,
                            jobRole: previousItem.jobRole.includes(item)
                              ? previousItem.jobRole.filter(
                                  (removeItem) => removeItem !== item
                                )
                              : [...previousItem.jobRole, item],
                          }))
                        }
                        checked={basicInfo.jobRole.includes(item)}
                        type="checkbox"
                      />
                      <div className="cities-dropdown-box-text">{item}</div>
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="added-btn-container">
            {basicInfo.jobRole.map((item) => {
              return (
                <div className="added-btn">
                  <div>{item}</div>
                  <i
                    class="fa-solid fa-circle-xmark delete-btn"
                    onClick={() =>
                      setBasicInfo((previousItem) => ({
                        ...previousItem,
                        jobRole: previousItem.jobRole.filter(
                          (removeItem) => removeItem !== item
                        ),
                      }))
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
                setBasicInfo((item) => ({
                  ...item,
                  jobRole: item.jobRole.includes("Frontend Developer")
                    ? [...item.jobRole]
                    : [...item.jobRole, "Frontend Developer"],
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
                  jobRole: item.jobRole.includes("Backend Developer")
                    ? [...item.jobRole]
                    : [...item.jobRole, "Backend Developer"],
                }))
              }
            >
              Backend Developer
            </div>
            <div
              className="job-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  jobRole: item.jobRole.includes("Data Scientist")
                    ? [...item.jobRole]
                    : [...item.jobRole, "Data Scientist"],
                }))
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
                basicInfo.experience === "Fresher" ? "checked-experience" : null
              }`}
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
              className={`job-btns ${
                basicInfo.experience === "1-3 years"
                  ? "checked-experience"
                  : null
              }`}
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
              className={`job-btns ${
                basicInfo.experience === "3-6 years"
                  ? "checked-experience"
                  : null
              }`}
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
              className={`job-btns ${
                basicInfo.experience === "6+ years"
                  ? "checked-experience"
                  : null
              }`}
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
