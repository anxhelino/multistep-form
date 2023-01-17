import React, { useState } from "react";

function Finishing({ finishing, finishingPlan, changeAddon }) {
  const [changePlan, setChangePlan] = useState(finishingPlan.plan.price);
  const [changeDescription, setChangeDescription] = useState(
    finishingPlan.description
  );
  const change = { final: finishing, changed: changeAddon };
  const [finish, setFinish] = useState(finishing);

  console.log(change);

  const onClickChangePlan = () => {
    if (changePlan === finishingPlan.plan.price) {
      setChangePlan(finishingPlan.changePlan.price);
      setChangeDescription((previous) => !previous);
      setFinish(change.changed);
      console.log(finishing);
    } else {
      setChangePlan(finishingPlan.plan.price);
      setChangeDescription((previous) => !previous);
      setFinish(change.final);
      console.log(finishing);
    }
  };
  const FinishAddon = () => {
    finish.map((adon) => {
      if (adon[0] === "online") {
        adon[0] = "Online Service";
      }
      if (adon[0] === "storage") {
        adon[0] = "Larger storage";
      }
      if (adon[0] === "costumizable") {
        adon[0] = "Costumizable profile";
      }
    });
    return finish.map((adon) => {
      return (
        <div className="other">
          <p>{adon[0]}</p>
          <span>{adon[1]}</span>
        </div>
      );
    });
  };

  console.log(finishing);

  const TotalPrice = () => {
    let price = 0;
    console.log(finishing);
    const adonPrice = finish.map((adon) => {
      price += +adon[1].replace(/[a-zA-Z+$/]/g, "");
    });
    let planPrice = +changePlan.replace(/[a-zA-Z+$/]/g, "");
    let planSub = changePlan.replace(/[^a-zAZ+]/g, "");
    console.log(planSub);
    return `${price + planPrice}/${planSub}`;
  };

  return (
    <div className="form ">
      <div className="head">
        <h3>Finishing up</h3>
        <p>Double-check everything looks OK before confirming</p>
      </div>
      <div className="charge">
        <div className="arc">
          <div>
            <p>
              {finishingPlan.activePlan} (
              {changeDescription ? "Yearly" : "Monthly"}){" "}
            </p>
            <span onClick={onClickChangePlan} className="underline">
              Change
            </span>
          </div>
          <span>{changePlan}</span>
        </div>
        <FinishAddon />
      </div>
      <div className="total">
        <p>Total ({changeDescription ? "per Year" : "per Month"})</p>
        <span>
          $<TotalPrice />
        </span>
      </div>
    </div>
  );
}

export default Finishing;
