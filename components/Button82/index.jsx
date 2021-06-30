import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button82.css";

function Button82(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x26013055TimelineData);
  }, []);

  return (
    <div className="x26013055 component component-wrapper not-ready">
      <div className="master-button-bEwMED">
        <div className="button-i2601305551-fEuPhW valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x26013055TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x26013055",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button82;
