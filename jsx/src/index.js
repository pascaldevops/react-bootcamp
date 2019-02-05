// 1. Import react and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// 2. Create a react functionnal Component
const App = () => {

  const buttonText = { text: 'Click Me!' };
  const labelText = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">{ labelText } </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color:'white' }}>
        { buttonText.text }
      </button>
    </div>
  );
};

// 3. Show react component on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
