import React from 'react';
import { setUser } from '../services/UserService';
import '../styles/Register.css';

export default function Register() {
    // Creamos aquí nuestros Hooks (useState)


    // TODO:
    const handleSubmit = (event) => {
        event.preventDefault();
        setUser().then()//verificar que me trae
        // puedo redirigirlo a login o (en este caso) podría directamente, una vez que se verifica que se registra el usuario, a AllPost ("poniendo en el contexto el nombre del usuario")
    }

    return (
        <div>
            <h2>Bienvenidos. Por favor regístrese aquí.</h2>
            <form>
                <fieldset>
                    <label htmlFor="name">
                        <input type="text" placeholder="Escriba su nombre"/>
                    </label> <br/>
                    <label htmlFor="email">
                        <input type="email" placeholder="Escriba su dirección de correo"/>
                    </label> <br/>
                    <label htmlFor="password">
                        <input type="password" placeholder="Escriba su contraseña"/>
                    </label>
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}