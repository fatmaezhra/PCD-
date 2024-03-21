import React, { useState } from 'react';
import './Accueil.css';
import { Link } from 'react-router-dom';



const Accueil = () => {
  return (
    <div className="container">
        <div className='part'>
      
       <div className='part2'>
        <div className="app-name">
          
          HealthTracker
        </div>
      
        
        <div className="titre">
          <div className='ph1' > <h2>"Votre bien être</h2></div>
          <div className='ph2' ><h2> Notre engagement "</h2></div>
        </div>
        </div>
        <div className="logo">
    
    <img src="images/logo.png" alt="" />
    
    
   </div>
        </div>

        <div className="carte-signin">
        <div className="button-container">
            <Link to="/signUp">
            <button className="Create_button">
              Créer un compte
            </button>
            </Link>
            <Link to="/signUp">
              <button className="Connect_button">
                Se connecter
              </button>
            </Link>
          
         </div>
      </div>
    </div>
  );

};

export default Accueil;
