import React from "react";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";
const NavBar = () => {
  return (
    <header className="navBar">
      <nav className="items">
        <div>
          <a href="home" className="logoLink">
            <img
              className="logo"
              src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
              alt="empty"
            ></img>
          </a>
        </div>
        <div className="articulos">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Section 1
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Section 2
              </Link>
            </li>

            <li>
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Section 3
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="mail"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <AiOutlineWhatsApp style={{ fontSize: "2vw" }} />

          <AiFillLinkedin style={{ fontSize: "2vw" }} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
