import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as IconArcade } from "../images/icon-arcade.svg";
import { ReactComponent as IconAdvanced } from "../images/icon-advanced.svg";
import { ReactComponent as IconPro } from "../images/icon-pro.svg";
const planState = {
  monthly: {
    Arcade: {
      price: "$9/mo",
    },
    Advanced: {
      price: "$12/mo",
    },
    Pro: {
      price: "$15/mo",
    },
  },
  yearly: {
    Arcade: {
      price: "$90/yr",
    },
    Advanced: {
      price: "$120/yr",
    },
    Pro: {
      price: "$150/yr",
    },
  },
};
function Plan({ handlePlan }) {
  const [planDescription, setPlanDescription] = useState(planState.monthly);
  const [yearlyDescription, setYearlyDescription] = useState(false);
  const [changePlan, setChangePlan] = useState(planState.yearly);

  const [activePlan, setActivePlan] = useState("");

  const activePlanHandleClick = (event) => {
    if (event.target.closest("#arcade")) {
      setActivePlan("Arcade");
    }
    if (event.target.closest("#advanced")) {
      setActivePlan("Advanced");
    }
    if (event.target.closest("#pro")) {
      setActivePlan("Pro");
    }
  };

  useEffect(() => {
    // console.log({ yearlyDescription }[activePlan]?.selected);
    console.log(planDescription);
    handlePlan(
      { ...planDescription }[activePlan],
      yearlyDescription,
      activePlan,
      { ...changePlan }[activePlan]
    );
  }, [activePlan, yearlyDescription]);

  const planTimeHandle = (event) => {
    if (event.target.checked) {
      setPlanDescription(planState.yearly);
      setYearlyDescription(true);
      setChangePlan(planState.monthly);
    } else {
      setPlanDescription(planState.monthly);
      setChangePlan(planState.yearly);
      setYearlyDescription(false);
    }
  };

  return (
    <div className="form bg-height">
      <div className="head">
        <h3>Select your plan</h3>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <div className="arcade-container">
        <div
          id="arcade"
          onClick={activePlanHandleClick}
          className={`arcade ${activePlan === "Arcade" ? "selected" : ""}`}
        >
          <i>
            <IconArcade />
          </i>
          <div>
            <h4 className="plan-options">Arcade</h4>
            <span className="price">{planDescription.Arcade.price}</span>
            <br />
            {yearlyDescription ? (
              <span className="des"> 2 months free</span>
            ) : null}
          </div>
        </div>
        <div
          onClick={activePlanHandleClick}
          className={`arcade ${activePlan === "Advanced" ? "selected" : ""}`}
          id="advanced"
        >
          <i>
            <IconAdvanced />
          </i>
          <div>
            <h4 className="plan-options">Advanced</h4>
            <span className="price">{planDescription.Advanced.price}</span>
            <br />
            {yearlyDescription ? (
              <span className="des"> 2 months free</span>
            ) : null}
          </div>
        </div>
        <div
          onClick={activePlanHandleClick}
          className={`arcade ${activePlan === "Pro" ? "selected" : ""}`}
          id="pro"
        >
          <i>
            <IconPro />
          </i>
          <div>
            <h4 className="plan-options">Pro</h4>
            <span className="price">{planDescription.Pro.price}</span>
            <br />
            {yearlyDescription ? (
              <span className="des"> 2 months free</span>
            ) : null}
          </div>
        </div>
      </div>
      <div className="toggle-container">
        <label htmlFor="theme" className="toggle">
          <span
            className={`theme--text ${
              yearlyDescription === false ? "toggle-active" : "toggle-deactive"
            }`}
          >
            Monthly
          </span>
          <input onChange={planTimeHandle} type="checkbox" id="theme" />
          <span className="theme--btn"></span>
          <span
            className={`theme--text ${
              yearlyDescription === true ? "toggle-active" : "toggle-deactive"
            }`}
          >
            Yearly
          </span>
        </label>
      </div>
    </div>
  );
}

export default Plan;
