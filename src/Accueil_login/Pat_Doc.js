import React, { useState } from 'react';
import './Pat_Doc.css';
import { Link } from 'react-router-dom';



const Pat_Doc = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
         
         <img src="images/logo.png" alt="" />
         
        </div>
        <div className="app-name">
          
          HealthTracker
        </div>
      </div>
      <div className="carte-signin">
        <div className="titre">
          <h2 >Identifiez-vous :</h2>
        </div>
        <div className="button-container">
            <Link to="/signUp">
            <button className="Docteur_button">
              DOCTEUR
            </button>
            </Link>
            <Link to="/signUp">
              <button className="Patient_button">
                PATIENT
              </button>
            </Link>
          
         </div>
      </div>
    </div>
  );

};

export default Pat_Doc;
