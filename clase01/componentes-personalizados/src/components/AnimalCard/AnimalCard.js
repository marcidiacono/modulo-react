import React from 'react';
import PropTypes from 'prop-types';
import './AnimalCard.css';

export default function AnimalCard({
    additional,
    diet,
    weight,
    scientificName,
    name,
    showAdditional
    }) {
    return(
        <div className="animal-wrapper">
            <h2>{name}</h2>
            <h3>{scientificName}</h3>
            <h4>{weight} kg</h4>
            <div>{diet.join(", ")}.</div>
            <button onClick={() => showAdditional(additional)}>+ Info</button>
        </div>
    )
}

AnimalCard.propTypes = {
    additional: PropTypes.shape({
        notes: PropTypes.string,
        link: PropTypes.string,
    }),
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    scientificName: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}

AnimalCard.defaultProps = {
    additional: {
        notes: "No hay información adicional."
    }
}