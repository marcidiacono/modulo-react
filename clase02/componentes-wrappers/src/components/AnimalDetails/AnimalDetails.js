import React from 'react';
import PropTypes from 'prop-types';
import './AnimalDetails.css';

function convertDiet(food) {
    switch (food) {
        case "carne":
            return "🥩";
        case "plantas":
            return "🌿";
        case "insectos":
            return "🦟";  
        default:
            return "🥚";
    }  
}

export default function AnimalDetails(props) {
    const { 
        diet, 
        scientificName,
    } = props
    return(
        <div className="details">
            <h4>Details:</h4>
            <div>
                Nombre científico: {scientificName}
            </div>
            <div>
                Dieta: {diet.map((food) => convertDiet(food)).join(" ")}
            </div>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName: PropTypes.string.isRequired,
}