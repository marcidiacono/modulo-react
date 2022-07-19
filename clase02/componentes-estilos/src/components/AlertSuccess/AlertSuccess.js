import React from 'react';
import Alert from '../Alert/Alert';
import { createUseStyles } from 'react-jss';

// Como estoy trabajando con estilos en línea con un objeto de estilo, saco la referencia al css.
// import "./AlertSuccess.css";

const useStyles = createUseStyles({
    item: {
        margin: 10,
    },
    wrapper: {
        borderTop: "black solid 1px",
        display: "flex",
        flexWrap: "wrap",
        "& h2": {
            width: "100%",
        }
    },
})

export default function AlertSuccess() {
    
    const classes = useStyles();

    return(
        <Alert 
            title="Datos encontrados"
            type="success">
            <div className={classes.wrapper}>    
                <h2>Se encontraron 2 ítems:</h2>
                <div className={classes.item}>
                    <div>Argentina</div>
                    <div>Puesto: 1</div>    
                </div>        
                <div className={classes.item}>
                    <div>Canadá</div>
                    <div>Puesto: 2</div>    
                </div> 
            </div>           
        </Alert>
    )
}