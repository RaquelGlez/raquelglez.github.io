import React from "react";
import image_notes_app from "../styles/images/mockup_notes-app.png";
import image_highmos from "../styles/images/mockup_highmos.png";

export const Work = () => {
  const proyects = [
    {
      id: 1,
      img: image_highmos,
      title: "Highmos-Web",
      url_code:"",
      url_repo:"",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
    {
      id: 2,
      img: image_notes_app,
      title: "NotesApp",
      url_code:"",
      url_repo:"",
      skills: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id rhoncus enim. Proin bibendum, libero in bibendum mollis, odio urna porttitor ante, vitae semper lectus libero sed libero. ",
    },
    {
      id: 3,
      img: image_notes_app,
      title: "Hi",
      url_code:"",
      url_repo:"",
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

         
        </div>
      </div>
    ));
  };

  return (
    <div className="proyect__container">
      <div className="proyect__card-container">
        {renderCard()}

      </div>
    </div>
  );
};
