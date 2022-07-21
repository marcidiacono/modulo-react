import React, { useReducer, createContext } from 'react';
import IcecreamBuilder from '../IcecreamBuilder/IcecreamBuilder';
import IcecreamSummary from '../IcecreamSummary/IcecreamSummary';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        textAlign: "center",
    },
});

export const IcecreamContext = createContext();

function reducer(state, item) {
    return [...state, item];
}

export default function IcecreamMaker() {
    const classes = useStyles();
    const [icecreams, setIcecream] = useReducer(reducer, []);
    return(
        <IcecreamContext.Provider value={{ icecreams, setIcecream }}>
            <h1 className={classes.wrapper}>
                <span role="img" aria-label="icecream">🍦 </span>
                    Helados Ice Cream
                <span role="img" aria-label="icecream"> 🍦</span>    
            </h1>
            <IcecreamBuilder/>
            <IcecreamSummary/>
        </IcecreamContext.Provider>
    )
}
