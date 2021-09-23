import React from "react";
import { about } from "./helpers/Data";
import { Nameplate } from "./helpers/Nameplate";
import { TankValve } from "./helpers/TankValve";

export const About = () => {
  return (
    <div className="about__container">
      <TankValve />
      <div className="about__tank-container">
        <div className="about__tank-grid">
          <div className="about__tank-name">
            <Nameplate name="Sobre mi" />
          </div>
          <div className="about__container-detail">
            <div className="about__image-container">
              <img
                src={about.img}
                className="img rounded-circle"
                alt="fotografia perfil"
              />
            </div>
            <div className="about__content-text">
              <h1 className="about__title pb-2">{`Hola! Soy ${about.name}`}</h1>
              <h4 className="about__title">{about.position}</h4>
              <p className="about__description">{about.aboutme}</p>
              <div className="about__description">
                <p>{about.descriptionSkills}</p>
                <p>{about.skills}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
