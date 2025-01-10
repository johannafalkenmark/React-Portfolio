import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import "./style.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [partyMode, togglePartyMode] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const _togglePartyMode = () => {
    togglePartyMode(!partyMode);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className={`${partyMode ? "container container-party" : "container"}`}>
      <Header partyMode={partyMode} togglePopup={togglePopup} />
      <main className="page-content">
        <Hero togglePopup={togglePopup} />
        <Section1
          togglePartyMode={_togglePartyMode}
          togglePopup={togglePopup}
        />
        <Section2 />
      </main>
      <Footer></Footer>
      {isPopupVisible && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup-button" onClick={togglePopup}>
              ×
            </button>

            <ContactForm onClose={togglePopup} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
