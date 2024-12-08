import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import "./style.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Footer from "./components/Footer";

function App() {
  const [partyMode, togglePartyMode] = useState(false);

  const _togglePartyMode = () => {
    togglePartyMode(!partyMode);
  };

  return (
    <div className={`${partyMode ? "container container-party" : "container"}`}>
      <Header partyMode={partyMode} />
      <main className="page-content">
        <Hero />
        <Section1 togglePartyMode={_togglePartyMode} />
        <Section2 />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
