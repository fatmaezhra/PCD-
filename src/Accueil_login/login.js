import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    numero: '',
    motdepasse: '',
  });
  const [message, setMessage] = useState('');
  const [showformDataError, setShowformDataError] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Ajoutez ici la logique de traitement du formulaire, par exemple, une requête vers votre API d'authentification.
    console.log('Numéro de téléphone:', formData.numero);
    console.log('Mot de passe:', formData.motdepasse);
  };

  const passwordStyle = {
    WebkitTextSecurity: 'disc',
    color: '#666',
  };

  return (
    <div className="login-container">
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
          <h2 >Connexion</h2>
        </div>
        <div className="cartecorps">
          <form className="formulaire" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="numero">Numéro de téléphone:</label>
              <input
                type="tel"
                id="numero"
                name="numero"
                placeholder="Entrez votre numéro de téléphone"
                value={formData.numero}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="motdepasse">Mot de passe:</label>
              <input
                type="password"
                id="motdepasse"
                name="motdepasse"
                placeholder="Entrez votre mot de passe"
                value={formData.motdepasse}
                onChange={handleInputChange}
                style={passwordStyle}
              />
            </div>
            <button type="submit" className="connexion-button">
              Se connecter
            </button>
            <div>{showformDataError && <span className='err'>Compte non trouvé!!</span>}</div>
             <span className="link">
              Vous n'avez pas de compte?{' '}
               <Link to="/signUp" style={{ cursor: 'pointer' }}>
                  Inscrivez-vous ici
               </Link>
              </span>
           
          </form>
          </div>
      </div>
    </div>
  );

};

export default Login;
