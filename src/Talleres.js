import React, { useState, useEffect } from "react";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Talleres = () => {
  const [taller, setTaller] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = taller.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, taller]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="slider" id="section3">
      <article style={{ width: "90%", margin: 0 }}>
        <h2 style={{ color: "blueviolet", fontSize: "2.5vw" }}>Talleres</h2>
        <p style={{ color: "grey", fontSize: "1vw" }}>
          Actividades de formación teórico prácticas de distintas especialidades
          con fines específicos para una mejor calidad de vida laboral a nivel
          integral. Formato online y presencial, duración 40 min. Dictado por
          profesionales de la salud.
        </p>
      </article>
      <article className="card-section">
        {taller.map((actividad, actividadIndex) => {
          const { id, title, text, image } = actividad;
          let position = "nextSlide";
          if (actividadIndex === index) {
            position = "activeSlide";
          }
          if (
            actividadIndex === index - 1 ||
            (index === 0 && actividadIndex === taller.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position + " slider-article"} key={id}>
              <div className="div-img-taller">
                <img src={image} alt={title}></img>
              </div>
              <div className="div-taller">
                <h4
                  style={{
                    color: "black",
                    fontSize: "2vw",
                    fontWeight: 700,
                  }}
                >
                  {title}
                </h4>
                <p style={{ color: "black", fontSize: "1.2vw" }}>{text}</p>
              </div>
            </article>
          );
        })}
        <button
          type="button"
          className="prev"
          onClick={() => setIndex(index - 1)}
        >
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button
          type="button"
          className="next"
          onClick={() => setIndex(index + 1)}
        >
          <FiChevronRight></FiChevronRight>
        </button>
      </article>
    </section>
  );
};

export default Talleres;
