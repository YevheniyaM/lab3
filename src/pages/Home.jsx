import React from "react";
import "../style.css";
import "../reset.css";

function Home() {
  return (
    <div className="wrapper-home">
      <main className="main-home">
        <section className="home-content">
          <h1 className="home-title">Adventure</h1>
          <p className="home-subtitle">Live Your Life</p>
          <button className="home-button" type="button">
            Register
          </button>
        </section>
      </main>
    </div>
  );
}

export default Home;
