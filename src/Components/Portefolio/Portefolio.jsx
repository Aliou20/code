import "./Portefolio.css";
import React from "react";
import Projet from "../Projet/Projet";

function Portefolio() {
  return (
    <section>
      <div className="container py-5">
        <h3 className="m-0">Mon Portefolio</h3>
        <p>Projets pro et perso</p>
        <Projet />
      </div>
    </section>
  );
};

export default Portefolio;
