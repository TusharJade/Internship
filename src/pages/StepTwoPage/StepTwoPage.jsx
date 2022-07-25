import "./StepTwoPage.css";

const StepTwoPage = () => {
  const stepTwoSubmitter = (e) => {
    e.preventDefault();
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
            type="email"
            placeholder="Eg. Bengaluru, Mumbai"
            required
          />
          <div className="top-citys-text">Top cities you may prefer:</div>
          <div className="city-btns-container">
            <button className="city-btns">Mumbai</button>
            <button className="city-btns">Delhi</button>
            <button className="city-btns">Pune</button>
            <button className="city-btns">Bengaluru</button>
          </div>
        </div>
      </form>
    </>
  );
};

export { StepTwoPage };
