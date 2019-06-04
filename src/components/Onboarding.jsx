import React from "react";
import Manual from "../assets/folder/Manual.pdf";

const Onboarding = props => {
  return (
    <div className="container-memorial" style={{ borderRadius: 20 }}>
      <center>
        {" "}
        <h2>
          <a
            href="https://drive.google.com/file/d/1TwMgVNvk3xid3rKYZShYP6fxk6qMibV4/view"
            target="_blanc"
          >
            Manual de instruções
          </a>
        </h2>
        <br />
        <br />
        <object class="manual" data={Manual} type="application/pdf">
          <embed src={Manual} type="application/pdf" />
        </object>
      </center>
    </div>
  );
};

export default Onboarding;
