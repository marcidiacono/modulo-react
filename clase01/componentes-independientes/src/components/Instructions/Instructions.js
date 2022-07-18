// Import para componente de clase
// import React, { Component } from 'react';
import React from 'react';
import './Instructions.css';
import emoji from './emoji.svg';

// Componente de clase
/*
export default class Instructions extends Component {
    render() {
        return(
            <div className="instructions">
                <img alt="emoji de globo" src={emoji}/>
                <p>Haga clic en un emoji para conocer el nombre.</p>
            </div>
        )
    }
}
*/

// Componente funcional
/*
export default function Instructions() {
    return(
        <div className="instructions">
            <img alt="emoji de globo" src={emoji}/>
            <p>Haga clic en un emoji para conocer el nombre.</p>
        </div>
    )
}
*/

const Instructions = () => {
    return(
        <div className="instructions">
            <img alt="emoji de globo" src={emoji}/>
            <p>Haga clic en un emoji para conocer el nombre.</p>
        </div>
    )
}

export default Instructions;