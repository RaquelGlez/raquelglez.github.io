import React from "react";
import { TankValve } from "./helpers/TankValve";
import { Nameplate } from "./helpers/Nameplate";
import { icons, proyects } from "./helpers/Data";

export const Work = () => {
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
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  // aria-expanded="true"
                  aria-controls={`collapse${index}`}
                >
                  {item.title}
                </button>
              </h5>

              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
              >
                <div className="accordion-body">
                  <p className="card-text">{item.description}</p>
                  <div className="card-text_tech">
                    <span className="badge">Tecnologías:</span>
                    <p className="card-text_tech-list">{item.skills}</p>
                  </div>
                  <a
                    href={item.url_page}
                    className="card-link pr-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-page">{icons.iconPage}</span>
                    Demo
                  </a>
                  <a
                    href={item.url_code}
                    className="card-link pl-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon-page">{icons.iconCode}</span>
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
