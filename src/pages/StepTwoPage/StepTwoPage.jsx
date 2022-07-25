import "./StepTwoPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/all-data";

const StepTwoPage = () => {
  const { storedDataDispatch } = useDataContext();

  const [basicInfo, setBasicInfo] = useState({ email: "", city: "" });

  const navigate = useNavigate();

  const stepTwoSubmitter = (e) => {
    e.preventDefault();
    storedDataDispatch({ type: "STEP_TWO_SUBMISSION", payload: basicInfo });
    navigate("/step-three");
  };
  return (
    <>
      <form onSubmit={stepTwoSubmitter}>
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
            <button className="step-btns">3</button>
          </div>
        </div>
        <div className="steps-container">
          <div className="heading-text">Where can we reach you?</div>
          <input
            className="input-name"
            type="email"
            placeholder="Enter your email address"
            required
          />
          <div className="heading-text">Prefered city to work?</div>
          <input
            className="input-name"
            onChange={(e) =>
              setBasicInfo((item) => ({ ...item, city: e.target.value }))
            }
            type="text"
            value={basicInfo.city}
            placeholder="Eg. Bengaluru, Mumbai"
            required
          />
          <select
            className="city-selector"
            onChange={(e) =>
              setBasicInfo((item) => ({ ...item, city: e.target.value }))
            }
          >
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Delhi">Delhi</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
          </select>
          <div className="top-citys-text">Top cities you may prefer:</div>
          <div className="city-btns-container">
            <div
              className="city-btns"
              onClick={(e) =>
                setBasicInfo((item) => ({ ...item, city: e.target.innerText }))
              }
            >
              Mumbai
            </div>
            <div
              className="city-btns"
              onClick={(e) =>
                setBasicInfo((item) => ({ ...item, city: e.target.innerText }))
              }
            >
              Delhi
            </div>
            <div
              className="city-btns"
              onClick={(e) =>
                setBasicInfo((item) => ({ ...item, city: e.target.innerText }))
              }
            >
              Pune
            </div>
            <div
              className="city-btns"
              onClick={(e) =>
                setBasicInfo((item) => ({ ...item, city: e.target.innerText }))
              }
            >
              Bengaluru
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export { StepTwoPage };
