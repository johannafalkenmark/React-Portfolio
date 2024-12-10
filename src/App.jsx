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
  /* PARTY MODE*/
  const [partyMode, togglePartyMode] = useState(false);
  //lägg pop up state här istället
  //och pop funktion
  const _togglePartyMode = () => {
    togglePartyMode(!partyMode);
  };

  return (
    <div className={`${partyMode ? "container container-party" : "container"}`}>
      <Header partyMode={partyMode} />
      <main className="page-content">
        {/* lägg in här att hero etc kan kalla på den pop up funktionen som nedan party*/}
        <Hero />
        <Section1 togglePartyMode={_togglePartyMode} />
        <Section2 />
      </main>
      <Footer></Footer>

      {/* lägg in pop upp komponent. Det enda din pop up behöver är om statet popIsVisible är true eller false för att avgöra om den ska visas eller inte */}
    </div>
  );
}

export default App;
