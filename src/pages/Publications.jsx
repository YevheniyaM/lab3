import React from "react";
import "../style.css";
import "../reset.css";

function Publications() {
  return (
    <div className="wrapper">
      <main className="main-gallery">
        <h1 className="main-heading">My Publications</h1>
        <section className="section-gallery">
          <div className="gallery">
            <figure className="gallery-item wide">
              <img
                src="./img/publications/plane.png"
                alt="View from plane window"
              />
              <figcaption className="gallery-buttons">
                <button className="gallery-btn delete" type="button">
                  Delete
                </button>
                <button className="gallery-btn edit" type="button">
                  Edit
                </button>
              </figcaption>
            </figure>
            <figure className="gallery-item">
              <img src="./img/publications/sunset.png" alt="Sunset at beach" />
              <figcaption className="gallery-buttons">
                <button className="gallery-btn delete" type="button">
                  Delete
                </button>
                <button className="gallery-btn edit" type="button">
                  Edit
                </button>
              </figcaption>
            </figure>
            <figure className="gallery-item">
              <img
                src="./img/publications/lanterns.png"
                alt="Japanese lanterns"
              />
              <figcaption className="gallery-buttons">
                <button className="gallery-btn delete" type="button">
                  Delete
                </button>
                <button className="gallery-btn edit" type="button">
                  Edit
                </button>
              </figcaption>
            </figure>
            <figure className="gallery-item">
              <img src="./img/publications/castle.png" alt="Castle view" />
              <figcaption className="gallery-buttons">
                <button className="gallery-btn delete" type="button">
                  Delete
                </button>
                <button className="gallery-btn edit" type="button">
                  Edit
                </button>
              </figcaption>
            </figure>
            <figure className="gallery-item">
              <img src="./img/publications/passport.png" alt="Passport" />
              <figcaption className="gallery-buttons">
                <button className="gallery-btn delete" type="button">
                  Delete
                </button>
                <button className="gallery-btn edit" type="button">
                  Edit
                </button>
              </figcaption>
            </figure>
            <figure className="gallery-item">
              <img src="./img/publications/temple.png" alt="Japanese temple" />
              <figcaption className="gallery-buttons">
                <button className="gallery-btn delete" type="button">
                  Delete
                </button>
                <button className="gallery-btn edit" type="button">
                  Edit
                </button>
              </figcaption>
            </figure>
            <figure className="gallery-item">
              <img src="./img/publications/totoro.png" alt="Totoro statue" />
              <figcaption className="gallery-buttons">
                <button className="gallery-btn delete" type="button">
                  Delete
                </button>
                <button className="gallery-btn edit" type="button">
                  Edit
                </button>
              </figcaption>
            </figure>
            <figure className="gallery-item wide">
              <img src="./img/publications/fuji.png" alt="Mount Fuji" />
              <figcaption className="gallery-buttons">
                <button className="gallery-btn delete" type="button">
                  Delete
                </button>
                <button className="gallery-btn edit" type="button">
                  Edit
                </button>
              </figcaption>
            </figure>
            <div className="add-publication">
              <button
                type="button"
                className="add-content"
                aria-label="Add new publication"
              >
                +
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Publications;
