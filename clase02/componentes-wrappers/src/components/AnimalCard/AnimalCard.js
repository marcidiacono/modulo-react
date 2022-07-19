import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import Card from '../Card/Card';

export default function AnimalCard(props) {

    const {
        name,
        weight
    } = props    
    return(
        <Card 
            title="Animal" 
            details={<AnimalDetails {...props}/>}>
            <div className="animal-wrapper">
                <h2>{name}</h2>
                <h4>{weight} kg</h4>
            </div>
        </Card>
    )
}

AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    weight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}