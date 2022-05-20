import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const Contactanos = () => {
  return (
    <button type="button" className="btn-contact">
      <Link
        href="#mail"
        activeClass="active"
        to="mail"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        Contactanos
      </Link>
    </button>
  );
};

export default Contactanos;
