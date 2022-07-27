import React from 'react';
import { useParams } from 'react-router-dom';

import Cake from './Cake';
import Donuts from './Donuts';

export default function Dessert() {
    const { type } = useParams();

    return (
        <>
            <h2>Desserts</h2>
            {type === "cake" && <Cake/>}
            {type === "donuts" && <Donuts/>}
        </>
    )    
}