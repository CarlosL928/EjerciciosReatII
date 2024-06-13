import React, {useState} from 'react'
import Child from './Child'


const Parent = () => {
    const [mensajeenviado, setMensaje] = useState(0);

    const actualizarMensaje = () => {
        setMensaje(mensajeenviado => mensajeenviado + 1)
    }
    return(
        <div>
            <h1>COMPONENTE PADRE</h1>
            <Child mensaje={mensajeenviado}></Child>
            <h1> {mensajeenviado} </h1>
            <button onClick={actualizarMensaje}>Actualiza al papa</button>
        </div>
    );

}

export default Parent;