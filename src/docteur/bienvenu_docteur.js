import React, { useState } from 'react';
import './bienvenu_docteur.css';
import { Link } from 'react-router-dom';



const Bienvenu_docteur = () => {
  return (
    <div className="container_1">
      <div className="header_1">
        <div className="logo_1">
         
         <img src="images/logo.png" alt="" className='image' />
         
        </div>
        <div className="app-name_1">
          
          HealthTracker
        </div>
        
      </div>
      <div className="carte-signin_1">
        <div className="titre_1">
          <h2>Bonjour,</h2>
          <h1>Dr.Foulen</h1>
        </div>
        <div className="button-container_1">
            <Link to="/signUp">
            <button className="button_1">
             Cas urgents:6
            </button>
            </Link>
            <Link to="/signUp">
              <button className="button_2">
               Données des patients
              </button>
            </Link>
          
         </div>
      </div>
      
      <div className="fleche_d">
           <Link to="/bienvenu_patient"> <img src="images/fleche_droite.png" className='fd' /> </Link>
       </div>
 
           
  
          
       
      
    
    </div>

  );
};

export default Bienvenu_docteur;
