import React, { Component } from "react";
import SassComponent from "./SassComponent";
import CSSModule from "./CSSModule";

class App extends Component {
  render() {
    return (
      <div>
        <h1>SASS</h1>
        <SassComponent />
        <hr></hr>
        <h1>CSS Module</h1>
        <CSSModule />
      </div>
    );
  }
}

export default App;
