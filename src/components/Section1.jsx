import { useState } from "react";

function Section1(props) {
  const [contactForm, setContactForm] = useState({
    email: "",
    name: "",
    message: "",
  });

  return (
    <>
      <div id="grid" className="grid">
        <div className="column-3 column-A column-A-js">
          <h2>About Me</h2>
          {contactForm.name}
          <p>
            sit amet consectetur adipisicing elit. Magnam voluptatibus nam optio
            vitae fugit ea, aliquid inventore reprehenderit repellat libero
            culpa amet eaque explicabo <span className="span">Johanna</span>{" "}
            molestiae qui sapiente! Enim, maxime. Quisquam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit.
          </p>
          <div className="spray-can-position" onClick={props.togglePartyMode}>
            <i className="bx bx-spray-can"></i>
          </div>
        </div>
        <div className="column-3 column-B">
          <a
            target="self"
            className="primary-button"
            href="Kontaktformulär.html"
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
          <p>
            <h2>Contact</h2>
            <div className="contact-form">
              <div>
                <label for="Name">Name</label>
              </div>
              <input
                className="input-contactform"
                placeholder="Type your name..."
                type="text"
                value={contactForm.name}
                onChange={(event) => {
                  setContactForm({ ...contactForm, name: event.target.value });
                }}
              />

              <div>
                <label for="Email">Email</label>
              </div>
              <input
                className="input-contactform"
                placeholder="Type your email..."
                type="text"
                value={contactForm.email}
                onChange={(event) => {
                  setContactForm({ ...contactForm, email: event.target.value });
                }}
              />

              <div>
                <label for="Message">Message</label>
              </div>
              <textarea
                className="input-contactform textarea"
                placeholder="Message..."
                type="text"
                value={contactForm.message}
                onChange={(event) => {
                  setContactForm({
                    ...contactForm,
                    message: event.target.value,
                  });
                }}
              />
              <button className="submit-button-contactform">Submit</button>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
export default Section1;
