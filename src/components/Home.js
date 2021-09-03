import React from "react";
import { Link } from "react-router-dom";
import { Valve } from "./helpers/Valve";

export const Home = () => {
  const MainOutletLine = ({ complement }) => {
    return (
      <div className={`home__main-line home__main-line-${complement}`}></div>
    );
  };

  const SecondaryOutletLine = ({ position }) => {
    return (
      <div
        className={`home__secondary-line home__secondary-line-${position}`}
      ></div>
    );
  };
  

  const getSymbol = (code) => {
    let char = String.fromCharCode(code);
    return char;
  };

  const Agitator = () => {
    return (
      <div className="home__agitator">
        <div className="home__agitator-item">{getSymbol(9474)}</div>
        <div>{getSymbol(8734)}</div>
      </div>
    );
  };

  const Section = ({ title, page, section }) => {
    return (
      <div className={`home__${section}-link`}>
        <div className="home__tank home__tank-size-link">
          <Link className="nav-link active" aria-current="page" to={`${page}`}>
            {title}
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="home__container container">
      <h6>RQL Process</h6>
      <div className="home__grid-container">
        <div className="home__supply">
          <div className="home__supply-content">
            <div className="home__name-line">
              <div className="home__supply-line home__supply-name">
                Raquel González
              </div>
            </div>
            <div className="home__name-secondary">
              <SecondaryOutletLine position="bottom" />
            </div>

            <div className="home__position-line">
              <div className="home__supply-line home__supply-position">
                Frontend developer
              </div>
            </div>
            <div className="home__position-secondary">
              <SecondaryOutletLine position="top" />
            </div>
          </div>
        </div>

        <div className="home__output-about">
          <div className="home__output-about-content">
            <div className="home__output-about-first">
              <MainOutletLine complement="no-valve" />
            </div>
            <div className="home__output-line-horizontal home__output-about-second">
              <MainOutletLine complement="valve" />
              <Valve comp="home"/>
            </div>
          </div>
        </div>

        <div className="home__mix">
          <div className="home__mix-container">
            <div className="home__mix-line-top">
              <SecondaryOutletLine position="top" />
            </div>
            <div className="home__mix-tank-main">
              <div className="home__mix-tank-container">
                <div className="home__mix-tank-left">
                  <MainOutletLine complement="no-valve" />
                </div>
                <div className="home__mix-tank">
                  <div className="home__tank-mix home__tank-size-mix">
                    <Agitator />
                  </div>
                </div>
                <div className="home__mix-tank-right">
                  <MainOutletLine complement="no-valve" />
                </div>
              </div>
            </div>
            <div className="home__mix-line-bottom">
              <SecondaryOutletLine position="bottom" />
            </div>
          </div>
        </div>

        <div className="home__output-contact">
          <div className="home__output-contact-content">
            <div className="home__output-contact-first">
              <MainOutletLine complement="no-valve" />
            </div>
            <div className="home__output-line-horizontal home__output-contact-second">
              <MainOutletLine complement="valve" />
              <Valve comp="home"/>
            </div>
          </div>
        </div>
        <div className="home__output-proyects">
          <div className="home__output-line-horizontal">
            <MainOutletLine complement="valve" />
            <Valve comp="home"/>
          </div>
        </div>
        <Section title="Sobre mí" page="/about" section="about" />
        <Section title="Proyectos" page="/proyects" section="proyects" />
        <Section title="Contacto" page="/contact" section="contact" />
      </div>
    </div>
  );
};
