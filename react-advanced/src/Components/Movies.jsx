import React, { Component } from "react";
import withTooltip from "./withTooltip";
class Movies extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.props.showTooltip && <p>This is a tooltip.</p>}
      </div>
    );
  }
}

export default withTooltip(Movies);
