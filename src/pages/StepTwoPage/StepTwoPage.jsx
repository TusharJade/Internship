import "./StepTwoPage.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth";
import { useDataContext } from "../../context/all-data";

const cities = ["Mumbai", "Pune", "Bengaluru", "Delhi", "Hyderabad", "Chennai"];

const StepTwoPage = () => {
  const { authState, setAuthState } = useAuthContext();

  const { storedDataState, storedDataDispatch } = useDataContext();

  const [basicInfo, setBasicInfo] = useState({
    email: "",
    city: [],
    cityName: "",
    dropdown: false,
  });

  const navigate = useNavigate();

  const stepTwoSubmitter = (e) => {
    e.preventDefault();
    if (basicInfo.city.length < 1) {
      toast.warning("please fill prefered city", { autoClose: 2000 });
    } else {
      navigate("/step-three");
      toast.success("Step-two form filled", { autoClose: 2000 });
      setAuthState((item) => ({ ...item, stepThree: true }));
    }
    storedDataDispatch({ type: "STEP_TWO_SUBMISSION", payload: basicInfo });
  };
  return (
    <>
      <form onSubmit={stepTwoSubmitter}>
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
          <div className="heading-text">Where can we reach you?</div>
          <input
            className="input-name"
            onChange={(e) =>
              setBasicInfo((item) => ({ ...item, email: e.target.value }))
            }
            value={storedDataState.email || basicInfo.email}
            type="email"
            placeholder="Enter your email address"
            required
          />
          <div className="heading-text">Prefered city to work?</div>
          <div className="city-container">
            <input
              className="input-name"
              onChange={(e) =>
                setBasicInfo((item) => ({ ...item, cityName: e.target.value }))
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setBasicInfo((item) => ({
                    ...item,
                    cityName: "",
                    city: [...item.city, item.cityName],
                  }));
                  e.preventDefault();
                }
              }}
              type="text"
              value={basicInfo.cityName}
              placeholder="Eg. Bengaluru, Mumbai"
            />
            <div>
              <i
                className="fa-solid fa-angle-down city-selector"
                onClick={() =>
                  setBasicInfo((item) => ({
                    ...item,
                    dropdown: !item.dropdown,
                  }))
                }
              ></i>
              <div className="cities-dropdown-box">
                {basicInfo.dropdown === true
                  ? cities.map((item, i) => (
                      <div className="cities-checkbox-container" key={i}>
                        <input
                          className="cities-checkbox"
                          onClick={() =>
                            setBasicInfo((checkboxItem) => ({
                              ...checkboxItem,
                              city: checkboxItem.city.includes(item)
                                ? checkboxItem.city.filter(
                                    (removeItem) => removeItem !== item
                                  )
                                : [...checkboxItem.city, item],
                            }))
                          }
                          checked={basicInfo.city.includes(item)}
                          type="checkbox"
                        />
                        <div className="cities-dropdown-box-text">{item}</div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className="added-btn-container">
            {basicInfo.city.map((item, i) => {
              return (
                <div className="added-btn" key={i}>
                  <div>{item}</div>
                  <i
                    className="fa-solid fa-circle-xmark delete-btn"
                    onClick={() =>
                      setBasicInfo((singleCity) => ({
                        ...singleCity,
                        city: singleCity.city.filter(
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
          <div className="city-btns-container">
            <div
              className="city-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  city: item.city.includes("Mumbai")
                    ? [...item.city]
                    : [...item.city, "Mumbai"],
                }))
              }
            >
              Mumbai
            </div>
            <div
              className="city-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  city: item.city.includes("Delhi")
                    ? [...item.city]
                    : [...item.city, "Delhi"],
                }))
              }
            >
              Delhi
            </div>
            <div
              className="city-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  city: item.city.includes("Pune")
                    ? [...item.city]
                    : [...item.city, "Pune"],
                }))
              }
            >
              Pune
            </div>
            <div
              className="city-btns"
              onClick={() =>
                setBasicInfo((item) => ({
                  ...item,
                  city: item.city.includes("Bengaluru")
                    ? [...item.city]
                    : [...item.city, "Bengaluru"],
                }))
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
