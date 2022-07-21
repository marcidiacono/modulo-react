import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import UserContext from '../User/User';
import { IcecreamContext } from '../IcecreamMaker/IcecreamMaker';

const useStyles = createUseStyles({
    wrapper: {
       border: "lightgrey solid 1px",
       margin: 20,
       padding: 10,
       position: "relative",
       textAlign: "center",
       textTransform: "capitalize",
       width: 200,
    },
    favorite: {
        fontSize: 20,
        position: "absolute",
        bottom: 10,
        right: 10,
    },
    add: {
        border: "none",
        background: "none",
        cursor: "pointer",
    },
    image: {
        width: 80,
    },
});

export default function IcecreamItem({ image, name }) {
    const classes = useStyles();
    const user = useContext(UserContext);
    const favorite = user.favorites.includes(name);
    const { setIcecream } = useContext(IcecreamContext);
    return(
        <div className={classes.wrapper}>
            <h3>{name}</h3>
            <span className={classes.favorite} aria-label={favorite ? "Favorito" : "No favorito"}>
                {favorite ? "🧡" : ""}
            </span>
            <button className={classes.add} onClick={() => setIcecream(name)}>
                <img className={classes.image} src={image} alt={name} aria-label={name}/>
            </button>
        </div>
    )
}

IcecreamItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}