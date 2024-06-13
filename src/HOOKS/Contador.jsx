import React, { useState } from 'react';
import './Contador.css';

const Contador = () => {
        const [contador, setContador] = useState({ contador1: 10, contador2: 20, contador3: 30 });
        const { contador1, contador2, contador3 } = contador;
        return (
                <div>
                        <h1>Contador 1: {contador.contador1}</h1>
                        <h1>contador 2: {contador.contador2}</h1>
                        <h1>contador 3: {contador.contador3}</h1>
                        <button onClick={() => setContador({ ...contador, contador1: contador1 + 1 })}>+1</button>
                        <button onClick={() => setContador({ ...contador, contador2: contador2 + 2 })}>+2</button>
                        <button onClick={() => setContador({ ...contador, contador3: contador3 + 3 })}>+3</button>
                </div>
        );

};
export default Contador;
//Como sucede el cambio al contador que elijo?
//Al desestructurar el  contador,
//se puede acceder a cada uno de los contadores de manera individual.