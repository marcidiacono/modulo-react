import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        padding: 20,
        textAlign: "left",
        fontSize: 20,
        "& button": {
            background: "none",
            border: "black solid 1px",
            marginTop: 10,
            fontSize: 20,
            padding: 5,
            cursor: "pointer",
        }
    },
    preview: {
        border: "darkgray solid 1px",
        padding: 10,
    },
    informationWrapper: {
        position: "relative",
        "& button": {
            border: "none",
        }
    },
    information: {
        color: "blue",
        cursor: "pointer",
    },
    popup: {
        position: "absolute",
        background: "white",
        border: "black solid 1px",
        padding: 10,
        top: -65,
        left: 0,
    }
});

export default function MailGenerator() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        const handleWindowClick = () => setAlert(false);
        if (alert) {
            window.addEventListener("click", handleWindowClick, true);
        } else {
            window.removeEventListener("click", handleWindowClick, true);
        }
        return () => window.removeEventListener("click", handleWindowClick, true);
    }, [alert, setAlert]);

    const validate = (event) => {
        if (/&/.test(name)) {
            event.preventDefault();
            setAlert(true);
            return;
        } else {
            setAlert(false);
        }
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.preview}>
                <h2>Correo: {name}@mail.com</h2>
            </div>
            <form>
                <label>
                    <p>Nombre: <input name="name" 
                                      autoComplete="off"
                                      onChange={(event) => setName(event.target.value)}
                                      /></p>
                </label>
                <div className={classes.informationWrapper}>
                    <button className={classes.information}
                            type="button"
                            onClick={() => setAlert(true)}
                    >+ info</button>
                    {alert && 
                        <div className={classes.popup}>
                            <span role="img" aria-label="allowed">✔ </span>Caracteres alfanuméricos.<br/>
                            <span role="img" aria-label="not-allowed">✖ </span>&.
                        </div>}
                </div>    
                <div>
                    <button onClick={validate}>Guardar</button>
                </div>
            </form>
        </div>
    )
}
