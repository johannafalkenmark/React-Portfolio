import { useState } from "react";

function ContactForm( {onClose} ) {
  
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
        onClose();
      }, 1000);
    } else {
      setSubmitting(false);
    }
  };

return (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <h2>Contact</h2>
                  <div>
                    <label htmlFor="Name">Name</label>
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
                    <label htmlFor="Email">Email</label>
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
                    <label htmlFor="Message">Message</label>
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
                );
            }

export default ContactForm;