import React, { useState, useEffect } from "react";
import AddOns from "../pages/AddOns";
import Personal from "../pages/Personal";
import Plan from "../pages/Plan";
import Finishing from "../pages/Finishing";
import Thanks from "../pages/Thanks";

const Steps = {
  step1: {
    component: Personal,
    formValue: {
      name: "",
      email: "",
      phone: "",
    },
    backButton: false,
    nextButton: true,
  },
  step2: {
    component: Plan,
    backButton: true,
    planContent: [],
    planSelected: false,
    activePlan: "",
    nextButton: true,
  },
  step3: {
    component: AddOns,
    backButton: true,
    nextButton: true,
  },
  step4: {
    component: Finishing,
    backButton: true,
    addons: [],
    changedAddon: [],
    nextButton: true,
  },
  step5: {
    component: Thanks,
    backButton: false,
    nextButton: false,
  },
};

function Main() {
  const [activeStep, setActiveStep] = useState("step1");
  const [hasError, setHasError] = useState({
    name: false,
    email: false,
    phone: false,
  });
  const ActiveStep = Steps[activeStep].component;
  const BackButton = Steps[activeStep].backButton;
  const NextButton = Steps[activeStep].nextButton;
  //   setActiveStep("step2");
  const dataFunction = (name = "", email = "", phone = "") => {
    // const formData = await data;

    Steps.step1.formValue.name = name?.current?.value;
    Steps.step1.formValue.email = email?.current?.value;
    Steps.step1.formValue.phone = phone?.current?.value;
  };

  const onClickHandlePlan = (plan, description, activePlan, changePlan) => {
    if (plan) {
      Steps.step2.planSelected = true;
      Steps.step2.planContent = { plan, description, activePlan, changePlan };
    } else return (Steps.step2.planSelected = false);
  };
  console.log(Steps.step2.planContent[1]);

  const onClickHandleForm = () => {
    if (activeStep === "step1") {
      const { name, email, phone } = Steps.step1.formValue;

      setHasError((hasError) => ({
        name: false,
        email: false,
        phone: false,
      }));
      if (name.length <= 2) {
        setHasError((hasError) => ({
          ...hasError,
          name: true,
        }));
        return;
      }
      if (email.length <= 10) {
        setHasError((hasError) => ({
          ...hasError,
          email: true,
        }));
        return;
      }
      if (phone.length <= 7) {
        setHasError((hasError) => ({
          ...hasError,
          phone: true,
        }));
        return;
      }
      setActiveStep("step2");
      console.log(hasError);
    }
    if (activeStep === "step2") {
      if (Steps.step2.planSelected === true) {
        console.log(Steps.step2.planContent);
        setActiveStep("step3");
      }
    }
    if (activeStep === "step3") {
      let addon = Object.entries(Steps.step4.addons[0]).filter(
        ([key, value]) => value === true
      );

      addon = Object.fromEntries(addon);
      addon = Object.keys(addon);

      let addonSub = Object.entries(Steps.step4.addons[1]).filter(
        ([key, value]) => {
          return key === addon[0] || key === addon[1] || key === addon[2];
        }
      );
      let changeAddonSub = Object.entries(Steps.step4.addons[2]).filter(
        ([key, value]) => {
          return key === addon[0] || key === addon[1] || key === addon[2];
        }
      );
      Steps.step4.changedAddon = changeAddonSub;
      Steps.step4.addons = addonSub;

      // Steps.step4.addons[0].filter()
      setActiveStep("step4");
    }
    if (activeStep === "step4") {
      setActiveStep("step5");
    }
  };

  const onClickHandleAddon = (addon, sub, changeSub) => {
    console.log(Object.values(addon));
    console.log(sub);
    Steps.step4.addons = [addon, sub, changeSub];
  };

  const onBackClickHandle = () => {
    if (activeStep === "step2") {
      Steps.step1.formValue.name = "";
      Steps.step1.formValue.email = "";
      Steps.step1.formValue.phone = "";

      console.log(Steps.step1.formValue.name);

      setActiveStep("step1");
    }
    if (activeStep === "step3") {
      setActiveStep("step2");
    }
    if (activeStep === "step4") {
      setActiveStep("step3");
    }
  };

  return (
    <div className="container">
      <header>
        <div className="numbers">
          <div>
            <button className={activeStep === "step1" ? "active" : null}>
              1
            </button>
            <span className="span-hiden">
              <span>STEP 1</span>
              <h5>YOUR INFO</h5>
            </span>
          </div>
          <div>
            <button className={activeStep === "step2" ? "active" : null}>
              2
            </button>
            <span className="span-hiden">
              <span>STEP 2</span>
              <h5>SELECT PLAN</h5>
            </span>
          </div>
          <div>
            <button className={activeStep === "step3" ? "active" : null}>
              3
            </button>
            <span className="span-hiden">
              <span>STEP 3</span>
              <h5>ADD-ONS</h5>
            </span>
          </div>
          <div>
            <button
              className={
                activeStep === "step4" || activeStep === "step5"
                  ? "active"
                  : null
              }
            >
              4
            </button>
            <span className="span-hiden">
              <span>STEP 4</span>
              <h5>SUMMARY</h5>
            </span>
          </div>
        </div>
      </header>
      <ActiveStep
        handleForm={dataFunction}
        hasError={hasError}
        handlePlan={onClickHandlePlan}
        yearlySub={Steps.step2.planContent.description}
        handleAddon={onClickHandleAddon}
        finishing={Steps.step4.addons}
        changeAddon={Steps.step4.changedAddon}
        finishingPlan={Steps.step2.planContent}
      />
      <div className="buttons">
        {BackButton ? (
          <label onClick={onBackClickHandle} className="back-button">
            Go Back
          </label>
        ) : (
          ""
        )}
        {NextButton ? (
          <label
            className="link-style"
            htmlFor="submit-form"
            onClick={onClickHandleForm}
          >
            {activeStep === "step4" ? "Confirm" : "Next Step"}
          </label>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Main;
