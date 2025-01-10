import imageOfMe from "../images/613_KIL-054222.jpg"

function Section1({ togglePopup, togglePartyMode }) {
  return (
    <div id="grid" className="grid">
      <div className="column-3 column-A column-A-js">
        <h2>About Me</h2>

        <p>
          <div className="textarea">
            I am an IT and HR Project manager who is becoming a{" "}
            <span className="span">.Net Developer</span>. My intererst in
            developing grew during my position as a implementation consultant of
            a HCM system. I have a Bachelors degree in HR Psychology and have
            worked in different areas within HR, always with a hand in IT and
            systems. My aim is to combine all of my former and future skills.
          </div>
        </p>
      </div>
      <div className="column-3 column-B">
        <span
          className="primary-button"
          role="button"
          onClick={() => {
            togglePopup();
          }}
        >
          Contact
        </span>

        <a target="self" className="primary-button" href="#knowledge">
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
        <a target="self" className="primary-button" href="#reference">
          Reference
        </a>
      </div>

      <div className="column-3 column-C">
        <img className="image" src={imageOfMe} alt="Bild på mig" />
      </div>

      <div className="column-3 column-D">
        <ul className="header-menu-list column">
          <li>
            <i className="header-icon bx bx-envelope">
              <a href="mailto:johannafalkenmark@gmail.com?subject=Contact">
                Email Me
              </a>
            </i>
          </li>

          <li>
            <i className="header-icon bx bxl-linkedin">
              <a
                target="self"
                href="https://www.linkedin.com/in/johanna-falkenmark-0425a61b/"
              >
                Linkedin
              </a>
            </i>
          </li>

          <li>
            <i className="header-icon bx bxl-github">
              <a target="self" href="https://github.com/johannafalkenmark">
                GitHub
              </a>
            </i>
          </li>

          <li>
            <i className="header-icon bx bx-chevrons-down">
              <a
                href="Arbetslivserfarenhet Kompetens Johanna Falkenmark.pdf"
                download="JFCV"
              >
                Download CV
              </a>
            </i>
          </li>
        </ul>

        <div
          className="spray-can-position"
          role="button"
          onClick={togglePartyMode}
        >
          <i className="bx bx-spray-can"></i>
        </div>
      </div>
    </div>
  );
}
export default Section1;
