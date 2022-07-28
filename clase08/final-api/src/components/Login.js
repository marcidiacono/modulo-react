import React from 'react';
import { getUser } from '../services/UserService';
import '../styles/Login.css'

export default function Login() {
    // TODO
    // Agregar Hooks

    const handleSubmit = (event) => {
        event.preventDefault();
        getUser().then();

        // Si el usuario existe, redirijo a AllPost
        // Si el usuairo no existe, doy un mensaje de error y me quedo en el Login 
    }

    return (
        <div>
            <h3>Bienvenidos de nuevo. Por favor inicie sesión</h3>
            <form>
                <fieldset>
                    <label htmlFor="email">
                        <input type="email" placeholder="Escriba su dirección de correo"/>
                    </label><br/>
                    <label htmlFor="password">
                        <input type="password" placeholder="Escriba su contraseña"/>
                    </label>
                </fieldset>
                <button>Ingresar</button> <button type="button" onClick={() => {}}>Registrarse</button>
            </form>       
        </div>
    )
}