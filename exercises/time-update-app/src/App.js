import React, { Component } from "react";

class App extends Component {
  
  state = {
    time: null
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return <div className="time">The time is: {this.state.time}</div>;
  }
}

export default App;
