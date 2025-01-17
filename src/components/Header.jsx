function Header({ partyMode, togglePopup }) {
  return (
    <>
      <header
        className={`${
          partyMode ? "page-header page-header-party" : "page-header"
        }`}
      >
        <h1>Johanna Falkenmark</h1>
        <div className="icons-on-header">
          <a
            target="self"
            href="https://www.linkedin.com/in/johanna-falkenmark-0425a61b/"
          >
            <i className="header-icon bx bxl-linkedin bx-tada-hover bx-lg"></i>
          </a>
          <a
            target="self"
            href="mailto:johannafalkenmark@gmail.com?subject=Intresseförfrågan&body=Jag är intresserad av att komma i kontakt med dig"
          >
            <i className="header-icon bx bx-envelope bx-tada-hover bx-lg"></i>
          </a>
          <a target="self" href="https://github.com/johannafalkenmark">
            <i className="header-icon bx bxl-github bx-tada-hover bx-lg"></i>
          </a>

          <a
            href="Arbetslivserfarenhet Kompetens Johanna Falkenmark.pdf"
            download="JFCV"
          >
            <i className="header-icon bx bx-chevrons-down bx-lg bx-fade-down-hover"></i>
          </a>
        </div>

        <menu className="navigation-menu">
          <input type="checkbox" id="check" className="hamburger-checkbox" />
          <label for="check" className="checkbtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hamburger-svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M172.31-140q-29.92 0-51.12-21.19Q100-182.39 100-212.31v-115.38h760v115.38q0 29.92-21.19 51.12Q817.61-140 787.69-140H172.31ZM160-267.69v55.38q0 5.39 3.46 8.85t8.85 3.46h615.38q5.39 0 8.85-3.46t3.46-8.85v-55.38H160Zm320-170q-35.62 0-55.65 20-20.04 20-71.43 20-51.38 0-70.8-20-19.43-20-55.04-20-35.62 0-55.66 20-20.03 20-71.42 20v-60q35.62 0 55.66-20 20.03-20 71.42-20 51.38 0 70.81 20 19.42 20 55.03 20 35.62 0 55.66-20t71.42-20q51.38 0 71.42 20t55.66 20q35.61 0 54.65-20t70.42-20q51.39 0 73.04 20 21.65 20 54.81 20v60q-51.39 0-69.81-20t-54.04-20q-35.61 0-56.65 20t-72.42 20q-51.39 0-71.43-20-20.03-20-55.65-20Zm-380-130V-600q0-104.61 96-162.31Q292-820 480-820t284 57.69q96 57.7 96 162.31v32.31H100ZM480-760q-140.16 0-221.15 34.65-81 34.66-95.16 97.66h632.62q-14.16-63-95.16-97.66Q620.16-760 480-760Zm0 492.31Zm0-360Z" />
            </svg>
          </label>
          <nav className="header-menu">
            <ul className="header-menu-list">
              <li>
                <a href="#grid">About Me</a>
              </li>
              <li>
                <a href="#knowledge">Knowledge</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <span
                  role="button"
                  onClick={() => {
                    togglePopup();
                  }}
                >
                  Contact
                </span>
              </li>
            </ul>
          </nav>
        </menu>
      </header>
    </>
  );
}
export default Header;
