import React from "react";
import { ReactComponent as IconThank } from "../images/icon-thank-you.svg";

function Thanks() {
  return (
    <div className="form">
      <div className="thanks">
        <div className="thanks-icon">
          <i>
            <IconThank width={"60px"} />
          </i>
          <h2>Thank you!</h2>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
