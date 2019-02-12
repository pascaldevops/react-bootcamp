import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log('I entered: ' + term);
  }

  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* <ImageList /> */}
      </div>
    );
  }
}

export default App;
