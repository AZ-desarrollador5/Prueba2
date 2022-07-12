import React, { Component } from "react";
import PowerbiEmbedded from "react-powerbi";
import data from "../utils/data";

class PowerBi extends Component {
  onEmbedded = _dataRecived => {
    console.log("data", _dataRecived);
  };

  render() {
    // token type 1 is embedTokenURL
    // token type 0 is ADD token
    return (
      <div className="App">
        <PowerbiEmbedded
          id={`${data.reportID}`}
          embedUrl={`${data.embedUrl}`}
          accessToken={`${data.accessToken}`}
          filterPaneEnabled={false}
          navContentPaneEnabled={false}
          tokenType={1}
          width="600px"
          height="900px"
          onEmbedded={this.onEmbedded}
        />
      </div>
    );
  }
}

export default PowerBi;
