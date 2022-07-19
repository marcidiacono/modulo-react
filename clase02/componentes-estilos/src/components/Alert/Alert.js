import React from 'react';
import PropTypes from 'prop-types';
// Sacamos el css para refactorizar con estilos en línea.
// import "./Alert.css"

export default function Alert({
    children,
    title,
    type
}) {
    const colors = {
        success: "#11ae1e",
        error: "#ae1111",
    }

    const styles = {
        header: {
            color: colors[type],
            margin: "0 0 10px 0",
        },
        wrapper: {
            border: `${colors[type]} solid 1px`,
            padding: 15,
            marginBottom: 15,
            
        }
    }

    return(
        <div style={styles.wrapper}>
            <h2 style={styles.header}>{title}</h2>
            {children}
        </div>
    )
}

Alert.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired,
    ]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}