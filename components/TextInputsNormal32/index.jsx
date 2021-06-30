import React from "react";
import Frame122 from "../Frame122";
import "./TextInputsNormal32.css";

function TextInputsNormal32(props) {
  const { className, frame122Props } = props;

  return (
    <div className={`text-inputs-normal ${className || ""}`}>
      <Frame122 className={frame122Props.className}>{frame122Props.children}</Frame122>
    </div>
  );
}

export default TextInputsNormal32;
