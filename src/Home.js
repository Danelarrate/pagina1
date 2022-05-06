import React from "react";
import Contactanos from "./Contactanos";
import { Link, animateScroll as scroll } from "react-scroll";
const Home = () => {
  return (
    <section className="firstSection">
      <div id="home" className="home">
        <h1 style={{ margin: "5% auto 0 auto", color: "white" }}>Titulo 1</h1>
        <h1 style={{ margin: "0 auto 0 auto" }}>titulo 2</h1>
        <p style={{ margin: "5% auto 0 auto", width: "45%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          laoreet malesuada leo id suscipit. Maecenas id fermentum arcu. Mauris
          eu imperdiet velit, ac laoreet tellus. In id leo a ligula tempor
          scelerisque in non felis.
        </p>
      </div>
      <div className="randomDiv">
        <Contactanos />
        <button type="button" className="verMas">
          <Link
            href="#nosotros"
            activeClass="active"
            to="nosotros"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Ver mas
          </Link>{" "}
        </button>
      </div>
    </section>
  );
};

export default Home;
