import React from "react";
import image_highmos from "../styles/images/mockup_highmos.png";
import { Nameplate } from "./helpers/Nameplate";
import { TankValve } from "./helpers/TankValve";

export const About = () => {
  return (
    <div className="about__container">
      {/* <div className="about__container container-fluid vh-75"> */}
      <TankValve />
      <div className="about__tank-container">
        <div className="about__tank-grid">
          <div className="about__tank-name">
            <Nameplate name="Sobre mi" />
          </div>
          <div className="about__container-detail">
            <div className="about__image-container">
              <img
                src={image_highmos}
                className="img"
                alt="fotografia perfil"
              />
            </div>
            <div className="about__content-text">
              <h2 className="about__title">Hi!, Soy Raquel González</h2>
              <h4 className="about__title">Frontend Developer</h4>
              <p className="about__description">
                Me gusta aprender cosas nuevas constantemente.
                <br></br>
                Busco aplicar la tecnología, mi experiencia y vivencias para
                idear, crear o mejorar productos y servicios que coadyuven a
                mejorar la calidad de vida de las personas y el entorno.
              </p>
              <div className="about__description">
                  <h3 className="name-skill">Tecnologias</h3>
                  <ul className="list-skill">
                    <li className="p-1">React</li>
                    <li className="p-1">Node.js</li>
                    <li className="p-1">Firebase</li>
                    <li className="p-1">Bootstrap</li>
                    <li className="p-1">Git/Github</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
