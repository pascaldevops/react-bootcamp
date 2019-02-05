import React from "react";

const Segment1 = props => {
  return (
    <div>
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="pdf file outline icon" />
          { props.noDoc}
        </div>
        <div className="ui primary button">{ props.customerDoc }</div>
      </div>
    </div>
  );
};

export default Segment1;
