import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import UserContext from '../User/User';

const useStyles = createUseStyles({
    wrapper: {
        borderBottom: "black solid 1px",
        padding: [15, 10],
        textAlign: "right",
    },
});

export default function Header() {
    const user = useContext(UserContext);
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            Bienvenido {user.name}
        </div>
    )
}