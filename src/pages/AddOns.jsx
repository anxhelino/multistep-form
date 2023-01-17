import React, { useEffect, useState } from "react";
let addonSub = {
  monthly: {
    online: "+$1/mo",
    storage: "+$2/mo",
    costumizable: "+$2/mo",
  },
  yearly: {
    online: "+$10/yr",
    storage: "+$20/yr",
    costumizable: "+$20/yr",
  },
};

let sub = {};
let changeSub = {};

function AddOns({ yearlySub, handleAddon }) {
  const [checkboxActive, setCheckboxActive] = useState({
    online: false,
    storage: false,
    costumizable: false,
  });

  console.log(yearlySub);
  if (yearlySub) {
    sub = addonSub.yearly;
    changeSub = addonSub.monthly;
  } else {
    sub = addonSub.monthly;
    changeSub = addonSub.yearly;
  }

  useEffect(() => {
    handleAddon(checkboxActive, sub, changeSub);
  }, [checkboxActive]);

  console.log(addonSub);
  const clickHandleCheckbox = (e) => {
    console.log(e.target.checked);
    if (e.target.closest(".adon").htmlFor === "online") {
      if (!e.target.checked) {
        setCheckboxActive((state) => ({ ...state, online: false }));
      } else setCheckboxActive((state) => ({ ...state, online: true }));
    }
    if (e.target.closest(".adon").htmlFor === "storage") {
      if (!e.target.checked) {
        setCheckboxActive((state) => ({ ...state, storage: false }));
      } else setCheckboxActive((state) => ({ ...state, storage: true }));
    }
    if (e.target.closest(".adon").htmlFor === "costumizable") {
      if (!e.target.checked) {
        setCheckboxActive((state) => ({ ...state, costumizable: false }));
      } else setCheckboxActive((state) => ({ ...state, costumizable: true }));
    }
  };

  return (
    <div className="form ">
      <div className="head">
        <h3>Pick add-ons</h3>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="options" onChange={clickHandleCheckbox}>
        <label
          className={`adon ${checkboxActive.online ? "selected" : ""} `}
          htmlFor="online"
        >
          <input id="online" type="checkbox" className="addon-input" />
          <div className="adon-options">
            <h4>Online service</h4>
            <span className="description">Access multiplayer games</span>
          </div>
          <span className="right">{sub.online}</span>
        </label>
        <label
          className={`adon ${checkboxActive.storage ? "selected" : ""} `}
          htmlFor="storage"
        >
          <input id="storage" type="checkbox" className="addon-input" />
          <div className="adon-options">
            <h4>Larger Storage</h4>
            <span className="description">Extra 1TB of cloud save</span>
          </div>
          <span className="right">{sub.storage}</span>
        </label>
        <label
          className={`adon ${checkboxActive.costumizable ? "selected" : ""} `}
          htmlFor="costumizable"
        >
          <input id="costumizable" className="addon-input" type="checkbox" />
          <div className="adon-options">
            <h4>Costumizable profile</h4>
            <span className="description">Costum theme on your profile</span>
          </div>
          <span className="right">{sub.costumizable}</span>
        </label>
      </div>
    </div>
  );
}

export default AddOns;
