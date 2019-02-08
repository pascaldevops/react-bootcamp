import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active inverted dimmer">
    <div className="ui text loader">{props.message}</div>
  </div>
  );
}

// provide default message if does not passed to the component
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;