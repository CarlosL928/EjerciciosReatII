import React from 'react'

const Child = ({ mensajerecibido }) => {
    return(
        <div>
            <h1> COMPONENTE HIJO. </h1>
           
            <p>{ mensajerecibido }</p>
        </div>
    );
}

export default Child;