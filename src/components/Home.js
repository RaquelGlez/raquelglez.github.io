import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const MainOutletLine = ({ complement }) => {
    return (
      <div className={`home__main-line home__main-line-${complement}`}></div>
    );
  };

  const SecondaryOutletLine = ({ position }) => {
    /*  return <div className="home__secondary-line"></div>; */
    return (
      <div
        className={`home__secondary-line home__secondary-line-${position}`}
      ></div>
    );
  };

  const Valve = () => {
    return (
      <div className="home__valve-connection home__valve-connection">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-arrow-bar-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
          />
        </svg>
      </div>
    );
  };

  const getSymbol = (code) => {
    let char = String.fromCharCode(code);
    return char
  }

  const Agitator = () => {
    return (
      <div className="home__agitator">
        <div className="home__agitator-item">{getSymbol(9474)}</div>
        <div >{getSymbol(8734)}</div>
      </div>
    )
  }

  return (
    <div className="home__container container">
      <h6>RQL Process</h6>
      <div className="home__grid-container">
        <div className="home__supply">
          <div className="home__supply-content">
            <div className="home__name-line">
               <div className="home__supply-line">
                Raquel González
                </div> 
              </div>
              <div className="home__name-secondary">
                <SecondaryOutletLine position="bottom" />
              </div>
            
            <div className="home__position-line">
              <div className="home__supply-line">
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
              <Valve />
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
                    {/* <img
                      src={agitator}
                      className="home__tank-agitator"
                      alt={agitator}
                    /> */}
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
              <Valve />
            </div>
          </div>
        </div>
        <div className="home__output-proyects">
          <div className="home__output-line-horizontal">
            <MainOutletLine complement="valve" />
            <Valve />
          </div>
        </div>
        <div className="home__about-link">
          <div className="home__tank home__tank-size-link">
            <Link className="nav-link active" aria-current="page" to="/">
              Sobre mí
            </Link>
          </div>
        </div>
        <div className="home__proyects-link">
          <div className="home__tank home__tank-size-link">
            <Link className="nav-link active" aria-current="page" to="/">
              Proyectos
            </Link>
          </div>
        </div>
        <div className="home__contact-link">
          <div className="home__tank home__tank-size-link">
            <Link className="nav-link active" aria-current="page" to="/">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
