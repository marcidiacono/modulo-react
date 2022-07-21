import React from 'react';
import IcecreamItem from '../IcecreamItem/IcecreamItem';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        display: "flex",
        flexWrap: "wrap",
        padding: [10, 50],
        justifyContent: "center",
    },
});

const flavours = [
    {
        image: "caramel.png", 
        name: "caramelo",
    },
    {
        image: "chocolate.png", 
        name: "chocolate",
    },
    {
        image: "cream.png", 
        name: "crema",
    },
    {
        image: "mint.png", 
        name: "menta",
    },
    {
        image: "strawberry.png", 
        name: "frutilla",
    },
    {
        image: "vanilla.png", 
        name: "vainilla",
    },
];

export default function IcecreamBuilder() {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            {flavours.map((flavour) => (
                <IcecreamItem
                    key={flavour.name}
                    image={__dirname + "images/" + flavour.image}
                    name={flavour.name}/>
            ))}
        </div>
    )
}