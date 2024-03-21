import React, { useState } from 'react';
import './informations_patient.css';
import { Link } from 'react-router-dom';



const Informations_patient = () => {
  
  return (
    <div className="container_3">
      <div className="header_3">
        <div className="logo_3">
         
         <img src="images/logo.png" alt="" />
         
        </div>
        <div className="app-name_3">
          
          HealthTracker
        </div>
        
      </div>

      <div className="carte-signin_3">
      
      <h1 className='titre1'>Informations de patient</h1>
      <div className="form-group">
      <div className='champ1'>
      <label for="nom">Nom et Prénom :</label>
      <input type="text" id="nom" name="nom" />
      </div>
      <div className='champ2'>
      <label for="num">Num de léléphone :</label> 
      <input type="text" id="num"  name="num"  /> 
      </div>
      <div className='champ3'>
      <label for="maladies">Maladies :</label> 
      <input type="text" id="maladies" name="maladies"  /> 
      </div>
      <div className='champ4'>
      <label for="vtension"> Dernières valeurs de tension:</label>
      <input type="text" id="vtension" name="vtension"  />
      </div>
      <div className='champ5'>
      <label for="vtempérature"> Dernières valeurs de température:</label>
      <input type="text" id="vtempérature" name="vtempérature"  />
      </div> 
      </div>
      <div className='datee'>
      <form>
      <label for="date">Date du rendez-vous prochain :</label>
      <input type="date" id="date" name="date" className='input-date'/>
      <input type="submit"  className='input-submit'/>
      </form>

      </div>
      <Link to="/Médicaments">
              <button className="buttonn">
               Voir Liste Médicaments
              </button>
            </Link>


      </div>

      <div className="fleche_d_2">
           <Link to="/préciser_patient_cible"> <img src="images/fleche_droite.png" className='fd_2' /> </Link>
       </div>
      
    </div>

  );
};

export default Informations_patient;
