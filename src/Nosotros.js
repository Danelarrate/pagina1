import React from "react";

const Nosotros = () => {
  return (
    <section className="aboutUs" id="section1">
      <article className="presentacion1">
        <h2>SOBRE NOSOTROS</h2>
        <p>
          Somos profesionales de Wellness & Recursos Humanos trabajando al
          servicio de las organizaciones por una mejor Calidad de Vida Laboral
        </p>
      </article>
      <article className="presentacion">
        <div className="img-div">
          <img
            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
            alt="empty"
          />
        </div>
        <article className="person-div" style={{ paddingLeft: "6vw" }}>
          <h3>John Cena</h3>
          <p>
            Profesional orientada a la excelencia en Recursos Humanos a nivel
            integral, con más de 15 años de trayectoria en empresas
            multinacionales y nacionales. Apasionada por el asesoramiento,
            gestión y el desarrollo de negocios
          </p>
          <ul>
            <li>Lic. en Relaciones del Trabajo (UBA) & Community Manager.</li>
            <li>
              Consultora Freelance especializada en atracción de Talentos IT.
            </li>
            <li>
              Relaciones institucionales, Community Manager, diseño de
              estrategias de RR.HH & Marketing de V&K Corporativo.
            </li>
          </ul>
        </article>
      </article>
      <article className="presentacion">
        <div
          className="person-div"
          style={{ paddingRight: "6vw", paddingLeft: "4vw" }}
        >
          <h3>Monkey D Luffy</h3>
          <p>
            Profesora de Elongación y Entrenamiento, Danza Jazz y Danza Clásica
            formada en el I.U.N.A. (Instituto Universitario Nacional del Arte)
            Formación en Danza jazz, Clásico, Pilates, Yoga y Elongación, en
            constante actualización de todas las técnicas.
          </p>
          <ul>
            <li>
              Profesora de Pausas Activas de Stretching en empresas
              multinacionales.
            </li>
            <li>
              Más de 20 años de experiencia como docente en importantes y
              reconocidas instituciones.
            </li>
            <li>
              Actual Directora y Docente en Estudio propio V&K en Movimiento y
              V&K Corporativo.
            </li>
          </ul>
        </div>
        <div className="img-div">
          <img
            src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
            alt="empty"
          />
        </div>
      </article>
      <article className="presentacion2">
        <article style={{ width: "55%" }}>
          <h4>CONOCÉ MÁS SOBRE NOSOTROS</h4>
          <h3>Cómo trabajamos</h3>
          <p>
            Investigamos los puestos de trabajo y recomendamos el plan de acción
            ideal. Medimos el impacto de nuestras acciones. Ofrecemos servicio
            de marketing interno. Realizamos seguimiento continuo de modo
            personalizado. Ayudamos a las personas a crear su propio espacio
            regenerativo. Somos flexibles y eficientes, optimizando los
            recursos.
          </p>
          <ul>
            <li>Modalidad: Sesiones grupales, generales o por sectores</li>
            <li>Antes, durante o despues de la jornada laboral</li>
            <li>Actividades guiadas y personalizadas</li>
            <li>No es necesario contar con experiencia previa</li>
            <li>Sesiones semanal, quincenal o mensual de 15 o 30 minutos</li>
            <li> Plataforma: Zoom o Meet / presencial</li>
          </ul>
        </article>
        <div className="img-div1">
          <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"></img>
        </div>
        <div className="img-div2">
          <div style={{ marginBottom: "1vh", height: "50%" }}>
            <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"></img>
          </div>

          <div style={{ height: "50%" }}>
            <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"></img>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Nosotros;
