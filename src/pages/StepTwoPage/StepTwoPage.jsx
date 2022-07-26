import "./StepTwoPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "../../context/all-data";

const cities = ["Mumbai", "Pune", "Bengaluru", "Delhi", "Hyderabad", "Chennai"];

const StepTwoPage = () => {
  const { storedDataDispatch } = useDataContext();

  const [basicInfo, setBasicInfo] = useState({
    email: "",
    city: [],
    cityName: "",
    dropdown: false,
  });

  const navigate = useNavigate();

  const stepTwoSubmitter = (e) => {
    e.preventDefault();
    basicInfo.city.length < 1
      ? alert("please fill prefered city")
      : navigate("/step-three");
    storedDataDispatch({ type: "STEP_TWO_SUBMISSION", payload: basicInfo });
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
                class="fa-solid fa-angle-down city-selector"
                onClick={() =>
                  setBasicInfo((item) => ({
                    ...item,
                    dropdown: !item.dropdown,
                  }))
                }
              ></i>
              <div className="cities-dropdown-box">
                {basicInfo.dropdown === true
                  ? cities.map((item) => (
                      <div className="cities-checkbox-container">
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
            {basicInfo.city.map((item) => {
              return (
                <div className="added-btn">
                  <div>{item}</div>
                  <i
                    class="fa-solid fa-circle-xmark delete-btn"
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
