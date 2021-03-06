// import react
import React from "react";
import ReactDOM from "react-dom";


  function getTime() {
    return (new Date()).toLocaleTimeString()
  }

// Creates a functional component
const App = () => {
    return (
        <div>
            <div>Current Time:</div>
            <h3>{ getTime() }</h3>
        </div>
    );
};

// Renders the App component into a div with id 'root'
ReactDOM.render(<App />, document.querySelector('#root'));

