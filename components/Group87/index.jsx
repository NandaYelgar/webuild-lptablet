import React from "react";
import FacebookAppSymbol from "../FacebookAppSymbol";
import Instagram from "../Instagram";
import Twitter from "../Twitter";
import "./Group87.css";

function Group87(props) {
  const { facebookAppSymbolProps, twitterProps } = props;

  return (
    <div className="group-87">
      <FacebookAppSymbol src={facebookAppSymbolProps.src} />
      <Instagram />
      <Twitter src={twitterProps.src} />
    </div>
  );
}

export default Group87;
