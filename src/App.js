import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bienvenu_docteur from './docteur/bienvenu_docteur';
import Create_doc from './docteur/create_doc';
import Accueil from './Accueil_login/Accueil'; 
import Login from './Accueil_login/login';
import Pat_Doc from './Accueil_login/Pat_Doc';
import Cas_urgents from './docteur/Cas_urgents';// Assurez-vous que le nom du fichier commence par une majuscule
import Informations_patient from './docteur/informations_patient';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create_doc" element={<Create_doc />} />
        <Route path="/bienvenu_docteur" element={<Bienvenu_docteur />} />
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Pat_Doc" element={<Pat_Doc />} />
        <Route path="/Cas_urgents" element={<Cas_urgents />} />
        <Route path="/informations_patient" element={<Informations_patient />} />
        {/* Ajoutez d'autres routes au besoin */}
      </Routes>
    </Router>
  );
}

export default App;

