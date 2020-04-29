import React, { useState } from "react";

import Gauge from "./components/Gauge";

function App() {
  const [value, setValue] = useState(50);

  return (
    <div>
      <Gauge size={24} value={value} label="Test" units="km/h" />

      <input
        style={{ width: "75%", marginTop: "2rem" }}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
    </div>
  );
}

export default App;
