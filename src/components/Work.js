import React from "react";
import image_notes_app from "../styles/images/mockup_notes-app.png";
import image_highmos from "../styles/images/mockup_highmos.png";
import { TankValve } from "./helpers/TankValve";
import { Nameplate } from "./helpers/Nameplate";

export const Work = () => {
  const iconPage = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-link"
      viewBox="0 0 16 16"
    >
      <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
      <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
    </svg>
  );

  const iconCode = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-code"
      viewBox="0 0 16 16"
    >
      <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z" />
    </svg>
  );

  const proyects = [
    {
      id: 1,
      img: image_highmos,
      title: "Highmos-Web",
      url_code: "https://github.com/RaquelGlez/Highmos-Web",
      url_page: "https://raquelglez.github.io/Highmos-Web/",
      skills: "",
      description:
        "Highmos-Web es una página web para reserva de hospedaje de una agencia de viajes. Es un proyecto en donde se práctica la maquetación con CSS, html y un poco de JS",
    },
    {
      id: 2,
      img: image_notes_app,
      title: "NotesApp",
      url_code: "https://github.com/RaquelGlez/NotesApp",
      url_page: "",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
    {
      id: 3,
      img: image_notes_app,
      title: "Hi",
      url_code: "",
      url_page: "",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
  ];

  const renderCards = () => {
    return proyects.map((item, index) => (
      <div className="card proyect__card" key={index}>
        <img
          src={item.img}
          className="card-img-top proyect__card-image"
          alt={item.title}
        />
        <div className="card-body">
          <div className="accordion" id="accordionCard">
            <div className="accordion-item">
              <h5
                className="card-title accordion-header"
                id={`heading${index}`}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  //data-bs-target="#collapseOne"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  // aria-expanded="true"
                  //aria-controls="collapseOne"
                  aria-controls={`collapse${index}`}
                >
                  {item.title}
                </button>
              </h5>

              <div
                //id="collapseOne"
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                //aria-labelledby="headingOne"
                aria-labelledby={`heading${index}`}
                //data-bs-parent="#accordionCard"
              >
                <div className="accordion-body">
                  <p className="card-text">
                    {item.description}
                    {/* Some quick example text to build on the card title and make
                    up the bulk of the card's content. */}
                  </p>
                  <a
                    href="https://www.google.com/"
                    className="card-link pr-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-page">{iconPage}</span>
                    Demo
                  </a>
                  <a
                    href="https://www.google.com/"
                    className="card-link pl-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-page">{iconCode}</span>
                    Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="proyect__container ">
      <TankValve />
      <div className="proyect__tank-container">
        <div className="proyect__tank-grid">
          <div className="proyect__tank-name">
            <Nameplate name="Proyectos" />
          </div>
          <div className="proyect__card-container">{renderCards()}</div>
        </div>
      </div>
    </div>
  );
};
