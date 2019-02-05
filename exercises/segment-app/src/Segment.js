import React from "react";
import Segment1 from "./Segment1";
import Segment2 from "./Segment2";

const Segment = props => {
  return (
    <div className="ui container">
      <Segment1 noDoc={props.noDoc} customerDoc={props.customerDoc}/>
      <Segment2 header={props.header} text={props.text}/>
    </div>
  );
};

export default Segment;
