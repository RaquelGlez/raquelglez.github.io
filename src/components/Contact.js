import React from "react";
import { TankValve } from "./helpers/TankValve";
import { Nameplate } from "./helpers/Nameplate";
import { icons } from "./helpers/Data";

export const Contact = () => {
  return (
    <div className="contact__container">
      <TankValve />
      <div className="contact__tank-container">
        <div className="contact__tank-grid">
          <div className="contact__tank-name">
            <Nameplate name="Contacto" />
          </div>
          <div className="contact__detail-container">
            <p className="contact__intro">
              ¿Tienes en mente un proyecto web o mobile interesante? <br />
              ¿Buscas una colaboradora?
            </p>
            <p className="contact__text">
              También quiero saber de ti, siente libre de ponerte en contacto
              conmigo por los siguientes espacios!
            </p>
            <div className="contact-icons">
              <a
                className="contact-link"
                href="mailto:gonzalez.c.raquel@gmail.com"
              >
                {icons.iconMail}
              </a>
              <a
                className="contact-link"
                target="_blank"
                href="https://www.linkedin.com/in/raquelglezc"
                rel="noopener noreferrer"
              >
                {icons.iconLnk}
              </a>
              <a
                className="contact-link"
                target="_blank"
                href="https://github.com/RaquelGlez"
                rel="noopener noreferrer"
              >
                {icons.iconGh}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
