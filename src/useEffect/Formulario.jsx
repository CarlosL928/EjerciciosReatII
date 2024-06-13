import React, { useEffect } from 'react'
import { useState } from 'react';
import Mensaje from './Mensaje';
import Coordenadas from './Coordenadas';

const Formulario = () => {
    const [formulario, setFormulario] = useState({
        user: 'Carlos',
        email: 'carlos@gmail.com'
    });
    const { user, email } = formulario;

    const inputChange = ({target})=>{
        const {name, value} = target;
        setFormulario({...formulario, [name]: value});
            };

    useEffect(() => {
       // console.log('Se modifico el email');
    }, [email]);

    useEffect(() => {
       // console.log('Se modifico el user');
    }, [user]);

  return (
    <div>

        <h2>Formulario</h2>
        <input 
        type="text"
        placeholder='username' 
        name='user'
        value={user}
        onChange={inputChange}
        />

        <br />

        {(user === 'carlos') && <Mensaje/>}
        {(user === 'carlos') && <Coordenadas/>}

       

        <input
        type="text"
        placeholder='email'
        name='email'
        value={email}
        onChange={inputChange}
        />
    </div>
  )
}

export default Formulario