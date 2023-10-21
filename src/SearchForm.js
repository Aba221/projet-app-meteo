import React, { useState } from 'react';

const SearchForm = ({ onSearch, onReset }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
  };

  const handleReset = () => {
    setCity(''); // Réinitialise la valeur du champ de saisie
    onReset();   // Appelle la fonction de réinitialisation
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Entrez un emplacement"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Rechercher</button>
        <button className="btn btn-secondary" type="button" onClick={handleReset}>Réinitialiser</button>
      </div>
    </form>
  );
};

export default SearchForm;
