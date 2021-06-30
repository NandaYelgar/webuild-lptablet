import React from "react";
import GetAQuoteButton22 from "../GetAQuoteButton22";
import "./Frame16.css";

function Frame16(props) {
  const { spanText, spanText2, spanText3, text334, getAQuoteButton22Props } = props;

  return (
    <div className="frame-16">
      <p className="text-8 valign-text-middle overpass-semi-bold-white-16px2">
        <span>
          <span className="span0 overpass-semi-bold-white-16px-22">{spanText}</span>
          <span className="span1 overpass-semi-bold-white-32px">{spanText2}</span>
          <span className="span2 overpass-extra-bold-mahogany-40px">{spanText3}</span>
        </span>
      </p>
      <p className="text-9 typography-body-smalltext-14-regular">{text334}</p>
      <GetAQuoteButton22>{getAQuoteButton22Props.children}</GetAQuoteButton22>
    </div>
  );
}

export default Frame16;
