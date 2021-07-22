










/* 

third v   work section

import React from "react";
import image_notes_app from "../styles/images/mockup_notes-app.png";
import image_highmos from "../styles/images/mockup_highmos.png";

export const Work = () => {
  const proyects = [
    {
      id: 1,
      img: image_highmos,
      title: "Highmos-Web",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
    {
      id: 2,
      img: image_notes_app,
      title: "NotesApp",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
    {
      id: 3,
      img: image_notes_app,
      title: "Hi",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
  ];

  const renderCard = () => {
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
              <h5 className="card-title accordion-header" id={`heading${index}`}>
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
             {/*  <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2> 
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
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a
                    href="https://www.google.com/"
                    className="card-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Card link
                  </a>
                  <a
                    href="https://www.google.com/"
                    className="card-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>

           <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> 
          <a
            href="https://www.google.com/"
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Card link
          </a>
          <a
            href="https://www.google.com/"
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Another link
          </a> 
        </div>
      </div>
    ));
  };

  return (
    <div className="proyect__container">
      <div className="proyect__card-container">
        {renderCard()}

        {/*  <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div> 




      </div>
    </div>
  );
};




*/







/* 
second version


import React from "react";
import image_notes_app from "../styles/images/mockup_notes-app.jpg";

export const Work = () => {
  const proyects = [
    {
      id: 1,
      img: image_notes_app,
      title: "Highmos-Web",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
    {
      id: 2,
      img: image_notes_app,
      title: "NotesApp",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
    {
      id: 3,
      img: image_notes_app,
      title: "Hi",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
  ];

  const renderCard = () => {
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
              <h5 className="card-title accordion-header" id={`heading${index}`}>
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
             {/*  <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2> 
              <div
                //id="collapseOne"
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                //aria-labelledby="headingOne"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#accordionCard"
              >
                <div className="accordion-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> 
                  <a
                    href="https://www.google.com/"
                    className="card-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Card link
                  </a>
                  <a
                    href="https://www.google.com/"
                    className="card-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Another link
                  </a>
                   <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>

         <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> 
          <a
            href="https://www.google.com/"
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Card link
          </a>
          <a
            href="https://www.google.com/"
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Another link
          </a> 
        </div>
      </div>
    ));
  };

  return (
    <div className="proyect__container">
      <div className="proyect__card-container">
        {renderCard()}

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div> 




      </div>
    </div>
  );
};





*/






/* 
first version

import React from "react";
import image_notes_app from "../styles/images/mockup_notes-app.jpg";

export const Work = () => {
  const proyects = [
    {
      id: 1,
      img: image_notes_app,
      title: "Highmos-Web",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
    {
      id: 2,
      img: image_notes_app,
      title: "NotesApp",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
    {
      id: 3,
      img: image_notes_app,
      title: "Hi",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
  ];

  const renderCard = () => {
    return proyects.map((item, index) => (
      <div className="card proyect__card" key={index}>
        <img
          src={item.img}
          className="card-img-top proyect__card-image"
          alt={item.title}
        />
        <div className="card-body">




          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h5 className="card-title">
                <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {item.title}
                  </button>
                </h5>
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>






          
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://www.google.com/"
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Card link
          </a>
          <a
            href="https://www.google.com/"
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Another link
          </a>
        </div>
      </div>
    ));
  };

  return (
    <div className="proyect__container">
      <div className="proyect__card-container">
        {renderCard()}

       {/*  <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div> 


      </div>
    </div>
  );
};
 */










//styles with home 

/*


.home__line1 {
  //border: 1px black solid;
  // background-color: rgb(94, 90, 90);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 50px;
  background-color: #e5e5e5;
  text-shadow: 2px 2px 3px rgb(147, 32, 32);
  color: rgb(94, 90, 90);
  border-radius: 20px;
  /* box-shadow: -10px -10px 15px #fff,
                10px, 10px 15px #c1c1c1,
                inset 0px 0px 0px #fff,
                inset 0px 0px 0px #c1c1c1; */
 // box-shadow: -10px -10px 15px rgb(155, 105, 105), 10px, 10px 15px #6549c9,
  //  0px 0px 0px rgb(191, 226, 62) inset, 0px 0px 0px #c1c1c1 inset;
 // box-shadow: -10px -10px 15px rgb(36, 202, 72);
/*  box-shadow: -10px -10px 15px #fff, 
            10px 10px 15px #c1c1c1, 
            0px 0px 0px #fff inset, 
            0px 0px 0px #c1c1c1 inset;

  cursor: pointer;
  transition: all 300ms ease;
} */

//.home__line1:hover {
 /*   box-shadow: 0px 0px 0px #fff,
                0px 0px 0px #c1c1c1,
                inset -10px -10px 15px #fff
                inset 10px 10px 15px #c1c1c1; */
/*     box-shadow: 0px 0px 0px rgb(119, 49, 49), 
                0px 0px 0px #1b6974, 
                0px -20px 15px rgb(44, 99, 182) inset, 
                0px 20px 15px #9dc50c inset;
    color: 2px 2px 3px rgb(147, 32,32);
    text-shadow: 2px 2px 3px rgb(147, 32,32);
} */



////////////////////////////////





