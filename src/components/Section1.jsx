import { useState } from "react";
//Ev istället för props { togglePopup }
function Section1(props) {
  
  return (
    <div id="grid" className="grid">
      <div className="column-3 column-A column-A-js">
        <h2>About Me</h2>

        <p>
          {" "}
          <div className="textarea">
            I am an IT and HR Project manager who is becoming a{" "}
            <span className="span">.Net Developer</span> through Nackademin. My
            intererst in developing grew during my position as a implementation
            consultant of a HCM system. I have a Bachelors degree in HR
            Psychology and have worked in different areas within HR, always with
            a hand in IT and systems. My aim is to combine all of my former and
            future skills.
          </div>
        </p>
        <div className="spray-can-position" onClick={props.togglePartyMode}>
          <i className="bx bx-spray-can"></i>
        </div>
      </div>
      <div className="column-3 column-B">
        <a
          className="primary-button"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            props.togglePopup();
          }}
        >
          Contact
        </a>
        <a target="self" className="primary-button" href="">
          About Me
        </a>
        <a target="self" className="primary-button" href="">
          Knowledge
        </a>
        <a
          target="self"
          className="primary-button"
          href="https://github.com/johannafalkenmark"
        >
          Portfolio
        </a>
        <a
          target="self"
          className="primary-button"
          href="Arbetslivserfarenhet Kompetens Johanna Falkenmark.pdf"
        >
          CV
        </a>
        <a target="self" className="primary-button" href="">
          Reference (Upon Request)
        </a>
      </div>

      <div className="column-3 column-C">
        <img
          className="image"
          src="images/613_KIL-054222.jpg"
          alt="Bild på mig"
        />
      </div>

      <div className="column-3 column-D">
        <div className="links-section1">
          <h2>Email Me</h2>
          <a
            target="self"
            href="mailto:johannafalkenmark@gmail.com?subject=Contact"
          >
            <i className="header-icon bx bx-envelope"></i>
          </a>
        </div>
        <div className="links-section1">
          <h2>Linkedin</h2>
          <a
            target="self"
            href="mailto:johannafalkenmark@gmail.com?subject=Contact"
          >
            <i className="header-icon bx bx-envelope"></i>
          </a>
        </div>
        <div className="links-section1">
          <h2>
            {" "}
            <a href="https://github.com/johannafalkenmark" target="self">
              GitHub
            </a>
          </h2>
        </div>

        <h2>Download CV</h2>
      </div>
    </div>
  );
}
export default Section1;
