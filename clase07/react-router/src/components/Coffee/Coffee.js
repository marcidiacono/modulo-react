import React from 'react';
import { useLocation } from 'react-router-dom';

import Cappuccino from './Cappuccino';
import Esspresso from './Esspresso';

export default function Coffee() {
    const { search } = useLocation();
    const match = search.match(/type=(.*)/);
    const type = match?.[1];
    return (
        <>
            <h2>Coffees</h2>
            {type === "esspresso" && <Esspresso/>}
            {type === "cappuccino" && <Cappuccino/>}
        </>
    )
}