function Contactform() {
  return (
    <>
      <body>
        <header>
          <h1>Kontaktformulär</h1>
        </header>

        <form action="https://formshow.systemmentor.se/" method="post">
          <h2>Registrera dig här</h2>
          <h3>Fyll i din kontaktinformation nedan:</h3>

          <div>
            <label for="Epost">Email</label>
          </div>
          <input
            type="email"
            name="Epost"
            id="1"
            placeholder="Enter email"
            label
            for="Epost"
            autofocus
          />

          <div>
            <label>Fill in your name</label>{" "}
          </div>

          <div>
            {" "}
            <input
              type="text"
              name="FirstName"
              id="name"
              placeholder="First name"
              required
            />
            <input
              type="text"
              name="Lastname"
              id="name2"
              placeholder="Last name"
              label
              for="Lastname"
            />
          </div>

          <div>
            {" "}
            <input
              type="text"
              name="Message"
              id="message"
              placeholder="Type your message"
              required
            />
        
          </div>
        </form>
      </body>
    </>
  );
}
export default Contactform;
