import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import "./App.css";
import Spinner from "./Spinner";


class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     lat: null,
  //     errorMessage: ''
  //   };
  // }

  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return (
      <div className="app loading">
        <Spinner message="Please accept the location request." />
      </div>
    );
  }
  render() {
    return (
      <div className="border red">
      {this.renderContent()}
    </div>
    );
  }
}

export default App;
