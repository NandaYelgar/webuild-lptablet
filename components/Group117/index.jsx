import React from "react";
import TextInputsNormal32 from "../TextInputsNormal32";
import "./Group117.css";

function Group117(props) {
  const { textInputsNormal32Props, textInputsNormal322Props } = props;

  return (
    <div className="group-117">
      <TextInputsNormal32 frame122Props={textInputsNormal32Props.frame122Props} />
      <TextInputsNormal32
        className={textInputsNormal322Props.className}
        frame122Props={textInputsNormal322Props.frame122Props}
      />
    </div>
  );
}

export default Group117;
