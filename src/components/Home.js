import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {

    const OutletPipe = () => {
        return <div className="home__line1 home__line-border-square"></div>
    }




  const Valve = () => {
    return <>
            <div className="home__valve">c1</div>
            <div className="home__valve2">c2</div>
        </>;
  };

  return (
    <div className="home__container">
      <h6>RQL Process</h6>
      <div className="home__grid-container">
        {/* <div className="my-5 mx-5 ">
                     <label className="home__line1 ">
                    Esto es una linea continua 
                    </label> 
                </div> */}
        <div className="home__name">
          {/*  ---- Aquí va el nombre ---- */}
          <div className="arrow"></div>
          <div className="home__line1 home__line1-border-rounder">
            Raquel González
          </div>
        </div>
        <div className="home__position">
          {/*  Aqui va el frontend */}
          <div className="home__line1 home__line1-border-rounder">
            Frontend developer
          </div>
        </div>
        <div className="home__output-about">
          Flecha a acerca de
          {/* <div className="home__line1 home__line-border-square"></div> */}
          <OutletPipe/>
          <div className="">
              <Valve/>
         </div>
          <div className="home__line2"></div>
        </div>
        <div className="home__mix">
          Aquí va el mix
          <div className="">caja del mix</div>
        </div>
        <div className="home__output-contact">
          <div className="home__line2"></div>
          {/* <div className="home__line1 home__line-border-square"></div> */}
          <OutletPipe/>
          Flecha a contacto
        </div>
        <div className="home__output-proyects">
          {/*  Flecha a proyectos */}
          {/* <div className="home__line1 home__line-border-square"></div> */}
          <OutletPipe/>
        </div>
        <div className="home__about-link">
          Aquí va enlace a Acerca de
          <div className="box__about-link">
            <Link className="nav-link active" aria-current="page" to="/">
              Sobre mí
            </Link>
          </div>
        </div>
        <div className="home__proyects-link">
          Aquí va enlace a proyectos
          <div className=""></div>
        </div>
        <div className="home__contact-link">
          Aquí va enlace a contactos
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
