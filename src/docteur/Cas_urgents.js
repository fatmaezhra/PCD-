import React, { useState } from 'react';
import './Cas_urgents.css';
import { Link } from 'react-router-dom';



const Cas_urgents = () => {
  
  return (
    <div className="container_2">
      <div className="header_2">
        <div className="logo_2">
         
         <img src="images/logo.png" alt="" />
         
        </div>
        <div className="app-name_2">
          
          HealthTracker
        </div>
        
      </div>

      <div className="carte-signin_2">
      <table> 
      <caption className='titre'>Cas Urgents</caption>
    <tr>
     
        <th>Patient</th>
        <th>Tension</th>
        <th>Température</th>
        <th>Prendre en charge</th>
    </tr>
    <tr>
        
        <td>Foulen Ben Foulen</td>
        <td>170/30</td>
        <td>41</td>
        <td><div className='photo'><img src="images/tlf.png" alt="" className='tlff'/><img src="images/camera.png" alt="" className='cameraa'/></div></td>
    </tr>
    </table>
        </div>
        <div className="fleche_g_1">
           <Link to="/préciser_patient_cible"> <img src="images/fleche_gauche.png" className='fg_1' /> </Link>
      </div>
      <div className="fleche_d_1">
           <Link to="/bienvenu_docteur"> <img src="images/fleche_droite.png" className='fd_1' /> </Link>
       </div>
    </div>

  );
};

export default Cas_urgents;
