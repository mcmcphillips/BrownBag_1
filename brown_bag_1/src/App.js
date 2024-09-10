import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense } from "react";

import Charmelion from "./Components/Charmelion/Charmelion"; // example of cascading effect
import Card from "./Components/Card/Card"; //base setyle
import Charizard from "./Components/Charizard/Charizard";
import Loading from "./Components/Loading";
import CardList from "./Components/Card/CardList";

function App(props) {
  const Charmander = lazy(() => import("./Components/Charmander/Charmander")); //simulation of non specific rule loading after in single spa
  const [charmander, setCharmander] = useState(false);
  const [charmelion, setCharmelion] = useState(false);
  const [charizard, setCharizard] = useState(false);

  // console.log("render");

  // useEffect(() => {
  //   console.log("charizard useEffect Fired");
  //   if (charizard) {
  //     setCharmelion(true);
  //   }
  // }, [charizard]);

  // // if charizard changes, update charmelion
  useEffect(() => {
    console.log("firing Charizard:", charizard);
    return () => {
      // abort calls, remove listeners
      console.log("cleanup code: Charizard", charizard);
    };
  }, [charizard]);

  // const onClick = () => {
  //   console.log('charizard', charizard)
  // }

  const onClick = useCallback(
    (e) => {
      console.log("charizard", charizard);
    },
    [charizard, charmelion, charmander],
  );

  return (
    <div className="App">
      <header className="App-header">Single Spa Specificity</header>
      <div className="control-row">
        <div>
          Charmander
          <label className="switch">
            <input
              type="checkbox"
              checked={charmander}
              onChange={(e) => setCharmander(!charmander)}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div>
          Charmelion
          <label className="switch">
            <input
              type="checkbox"
              checked={charmelion}
              onChange={(e) => setCharmelion(!charmelion)}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div>
          Charizard
          <label className="switch">
            <input
              type="checkbox"
              checked={charizard}
              onChange={(e) => setCharizard(!charizard)}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="effects-row">
        {/* map out some cards */}
        <div>
          {charmander && (
            <Suspense fallback={<Loading />}>
              <Charmander />
            </Suspense>
          )}
        </div>
        <div>{charmelion && <Charmelion />}</div>
        <div>{charizard && <Charizard />}</div>
      </div>
      {/* memoized list to prevent rerenders of expensive cards */}
      <CardList val={3} />
      {/* Grid */}
      {/* <div className="grid">
        {[...Array(4)].map((_, i) => (
          <Card key={`key-${i}`} />
        ))}
      </div> */}
      {/* bonus */}
      {/* <MadieEditor onClick={onClick} />  */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button
          type="submit"
          style={{ fontSize: 24, borderRadius: 20 }}
          onClick={onClick}
        >
          click me
        </button>
      </div>
    </div>
  );
}

export default App;
