import { useState } from "react";

function Section1(props) {
  /*POP UP:*/

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  function Popup({ onClose, children }) {
    return (
      <div className="popup-overlay" onClick={onClose}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-popup-button" onClick={onClose}>
            ×
          </button>
          {children}
        </div>
      </div>
    );
  }

  //CONTACTFORM
  const [contactForm, setContactForm] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};

    if (!inputValues.email) {
      errors.email = "Email is required";
    } else if (inputValues.email.length < 5) {
      errors.email = "Email is too short";
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      errors.email = "Email is invalid";
    }

    if (!inputValues.name) {
      errors.name = "Name is required";
    } else if (inputValues.name.length < 2) {
      errors.name = "Name is too short";
    }

    if (!inputValues.message) {
      errors.message = "Message is empty";
    } else if (inputValues.message.length < 2) {
      errors.message = "Message is too short";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateValues(contactForm);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        alert("Thank you for your message");
        setSubmitting(false);
        setContactForm({ email: "", name: "", message: "" });
      }, 1000);
    } else {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div id="grid" className="grid">
        <div className="column-3 column-A column-A-js">
          <h2>About Me</h2>

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
            className="primary-button"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              togglePopup();
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
          <p>
            {isPopupVisible && (
              <Popup onClose={togglePopup}>
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <h2>Contact</h2>
                  <div>
                    <label for="Name">Name</label>
                  </div>
                  <input
                    className="input-contactform"
                    placeholder="Type your name..."
                    type="text"
                    value={contactForm.name}
                    onChange={(event) =>
                      setContactForm({
                        ...contactForm,
                        name: event.target.value,
                      })
                    }
                  />
                  {errors.name && <p className="error">{errors.name}</p>}

                  <div>
                    <label for="Email">Email</label>
                  </div>
                  <input
                    className="input-contactform"
                    placeholder="Type your email..."
                    type="text"
                    value={contactForm.email}
                    onChange={(event) =>
                      setContactForm({
                        ...contactForm,
                        email: event.target.value,
                      })
                    }
                  />
                  {errors.email && <p className="error">{errors.email}</p>}

                  <div>
                    <label for="Message">Message</label>
                  </div>
                  <textarea
                    className="input-contactform textarea"
                    placeholder="Message..."
                    value={contactForm.message}
                    onChange={(event) =>
                      setContactForm({
                        ...contactForm,
                        message: event.target.value,
                      })
                    }
                  />

                  {errors.message && <p className="error">{errors.message}</p>}

                  <button
                    type="submit"
                    className="submit-button-contactform"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </Popup>
            )}
          </p>
        </div>
      </div>
    </>
  );
}
export default Section1;
