function Section1() {

return (
  <>
    <div id="grid" className="grid">
      <div className="column-3 column-A column-A-js">
        <h2>Om mig</h2>
        <p>
          sit amet consectetur adipisicing elit. Magnam voluptatibus nam optio
          vitae fugit ea, aliquid inventore reprehenderit repellat libero culpa
          amet eaque explicabo <span className="span">Johanna</span> molestiae
          qui sapiente! Enim, maxime. Quisquam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <div className="spray-can-position">
          <i className="bx bx-spray-can" id="sprayCan-js"></i>
        </div>
      </div>

      <div className="column-3 column-B">
        <a target="self" className="primary-button" href="Kontaktformulär.html">
          Kontakt
        </a>
        <a target="self" className="primary-button" href="Bokning.html">
          Om mig
        </a>
        <a target="self" className="primary-button" href="">
          Kunskap
        </a>
        <a
          target="self"
          className="primary-button"
          href="https://github.com/johannafalkenmark"
        >
          Portfölj
        </a>
        <a
          target="self"
          className="primary-button"
          href="Arbetslivserfarenhet Kompetens Johanna Falkenmark.pdf"
        >
          CV
        </a>
        <a target="self" className="primary-button" href="">
          Referens
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
          <h2>Väder</h2>
          <div className="weather-js"></div>
        </p>
      </div>
    </div>
  </>
);
}
export default Section1