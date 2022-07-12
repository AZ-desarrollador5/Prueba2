import React from "react";
import { render } from "react-dom";
import PowerBi from "./components/PowerBi";

const App = () => (
  <div>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <PowerBi />
  </div>
);

render(<App />, document.getElementById("root"));
