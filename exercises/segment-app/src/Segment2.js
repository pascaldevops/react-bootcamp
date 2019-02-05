import React from "react";

const Segment2 = props => {
  return (
    <div className="ui placeholder segment">
      <h4 className="ui header">{ props.header }</h4>
      <p>{ props.text }</p>
    </div>
  );
};

export default Segment2;
