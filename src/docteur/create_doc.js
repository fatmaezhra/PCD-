import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './create_doc.css';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Définition du composant MapIcon
const MapIcon = ({ onClick }) => (
  <FaMapMarkerAlt onClick={onClick} style={{ cursor: 'pointer' }} />
);

// Définition du composant Map
const Map = ({ id }) => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    mapRef.current = L.map(id).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapRef.current);
  }, [id]);

  return <div id={id} className="map-container" style={{ height: '300px' }}></div>;
};

// Définition du composant Login
const Create_doc = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
  });
  const [showMap, setShowMap] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Nom:', formData.nom);
    console.log('Prénom:', formData.prenom);
    console.log('Adresse:', formData.adresse);
  };

  const toggleMap = () => {
    setShowMap(!showMap);
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
          <h2>Créer compte Docteur</h2>
        </div>
        <div className="cartecorps">
          <form className="formulaire" onSubmit={handleFormSubmit}>
            <div>
              <input placeholder="Nom" name="nom" value={formData.nom} onChange={handleInputChange} />
              <input placeholder="Prenom" name="prenom" value={formData.prenom} onChange={handleInputChange} />
            </div>
            <div>
              <input placeholder="+216 XX XXX XXX" />
              <input placeholder="jane@exemple.com" />
              <div className="address-field">
                <input type="text" id="adresse" name="adresse" placeholder="Entrez votre adresse" value={formData.adresse} onChange={handleInputChange} />
                <MapIcon onClick={toggleMap} />
              </div>
              {showMap && <Map id="map-container" />} {/* Utilisation du composant Map avec un identifiant unique */}
              <input placeholder="Choisissez votre mot de passe" style={passwordStyle} />
              <input placeholder="Confirmez votre mot de passe" style={passwordStyle} />
            </div>
            <button type="submit" className="connexion-button">Créer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create_doc;
