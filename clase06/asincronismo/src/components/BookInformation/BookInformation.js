import React, { useEffect, useState } from 'react';
import { getBookInformation } from '../../servicios/books';
import PropTypes from 'prop-types';

export default function BookInformation( { name } ) {

    const [bookInformation, setBookInformation] = useState();

    useEffect(() => {
        let mounted = true;
        getBookInformation(name).then((data) => {
            if (mounted) {
                setBookInformation(data)
            }
        });
        return () => {
            mounted = false;
        }
    }, [name]);

    return (
        <div>
            <h2>Información de Libros</h2>
            <ul>
                <li>Título: {bookInformation?.title}</li>
                <li>Género: {bookInformation?.genre}</li>
                <li>Autor: {bookInformation?.author}</li>
            </ul>
        </div>
    )
}

BookInformation.propTypes = {
    name: PropTypes.string.isRequired,
}