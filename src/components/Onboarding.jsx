import React from "react";
import Step1 from "../assets/img/Step1.png";
import Step2 from "../assets/img/Step2.png";
import Step3 from "../assets/img/Step3.png";
const Onboarding = props => {
  return (
    <div className="container-memorial" style={{ borderRadius: 20 }}>
      <img
        className="tutorial"
        src={Step1}
        alt="Step1"
        style={{ padding: 5, borderRadius: 20 }}
      />

      <img
        className="tutorial"
        src={Step2}
        alt="Step1"
        style={{ padding: 5, borderRadius: 20 }}
      />

      <img
        className="tutorial"
        src={Step3}
        alt="Step1"
        style={{ padding: 5, borderRadius: 20 }}
      />
    </div>
  );
};

export default Onboarding;
