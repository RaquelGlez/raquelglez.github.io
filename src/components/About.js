import React from "react";
import image_highmos from "../styles/images/mockup_highmos.png";

export const About = () => {
  return (
    <div className="about__container container-fluid vh-100">
      <div className="about__image-container">
        <img src={image_highmos} className="img rounded-circle my-5" alt="fotografia perfil" />
      </div>
      <h2 className="about__title">Hi!, Soy Raquel González</h2>
      <h4 className="about__title">Frontend Developer</h4>

      <p className="about__description my-5">
        Me gusta aprender cosas nuevas constantemente.
        <br></br>
        Busco aplicar la tecnología, mi experiencia y vivencias para idear,
        crear o mejorar productos y servicios que coadyuven a mejorar la calidad
        de vida de las personas y el entorno.
      </p>
    </div>
  );
};
