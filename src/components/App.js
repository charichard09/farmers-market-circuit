import React from "react";
import Header from "./Header";
import MarketControl from "./MarketControl";
import SeasonalControl from "./SeasonalControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MarketControl />
      <SeasonalControl />
    </React.Fragment>
  );
}

export default App;