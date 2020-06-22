import React, { useState, useEffect, useCallback } from "react";
import defaultDataset from "./dataset";
import { Header, Main } from "./components/index.js";
import "./assets/styles/base.scss";

const App = () => {
  const [id, setId] = useState([]);
  const [datas, getDatas] = useState(defaultDataset.item);

  return (
    <div className="container" id="container">
      <Header />
      <Main datas={datas} />
    </div>
  );
};

export default App;
