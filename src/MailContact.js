import React from "react";

const MailContact = () => {
  return (
    <section className="sendemail">
      <form id="mail" className="form-section">
        <div>
          <h4 style={{ fontSize: "2.5vw", color: "gray", marginBottom: "2vh" }}>
            Contactanos{" "}
          </h4>
          <p style={{ fontSize: "1vw", color: "grey" }}>
            Complete el siguiente formulario para enviarnos un mensaje.
          </p>
        </div>
        <div className="input-format">
          <label id="asunto-label" htmlFor="asunto">
            Asunto
          </label>
          <select id="dropdown" name="asunto" className="form-control" required>
            <option value="contactar">Contactar</option>
            <option value="taller">Taller</option>
            <option value="pausas">Pausas</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="input-format">
          <label id="name-label" htmlFor="name">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Esteban Quitoahre"
            className="form-control"
            required
          />
        </div>
        <div className="input-format">
          <label id="email-label" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="ejemplo@dominio.com"
            name="email"
            required
          />
        </div>
        <div className="input-format">
          <label id="telefono-label" htmlFor="telefono">
            Numero Telefonico
          </label>
          <input
            type="telefono"
            id="telefono"
            className="form-control"
            placeholder="+54(11) 1234-5678"
            name="telefono"
            required
          />
        </div>

        <div className="input-format">
          <label>Tu mensaje</label>
          <textarea
            id="comments"
            className="input-textarea"
            name="comment"
            placeholder="Hola Contanos como podemos ayudarte"
          ></textarea>
        </div>
        <div className="form-group">
          <button
            type="submit"
            id="submit"
            className="submit-button"
            style={{ height: "10vh" }}
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </section>
  );
};

export default MailContact;
