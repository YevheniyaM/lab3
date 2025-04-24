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
                src="https://res.cloudinary.com/dlistrvqm/image/upload/v1745408611/cypowqlfuzyju5uvytkp.png"
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
              <img src="https://res.cloudinary.com/dlistrvqm/image/upload/v1745408611/wsri4rc7qoayu1jxkpy8.png" alt="Sunset at beach" />
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
                src="https://res.cloudinary.com/dlistrvqm/image/upload/v1745408611/klhxzpryagqrt0tryyxn.png"
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
              <img src="https://res.cloudinary.com/dlistrvqm/image/upload/v1745408611/dzqfwwem1p5iefu1jcj8.png" alt="Castle view" />
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
              <img src="https://res.cloudinary.com/dlistrvqm/image/upload/v1745408610/xnvo4h5gmjezpbgssy6o.png" alt="Passport" />
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
              <img src="https://res.cloudinary.com/dlistrvqm/image/upload/v1745408611/y38tv2v5uezijzm0d1ve.png" alt="Japanese temple" />
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
              <img src="https://res.cloudinary.com/dlistrvqm/image/upload/v1745408610/cfei0z02zaifc8nymvqq.png" alt="Totoro statue" />
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
              <img src="https://res.cloudinary.com/dlistrvqm/image/upload/v1745408610/uafb5mcbe8xdf7q3o3jb.png" alt="Mount Fuji" />
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
