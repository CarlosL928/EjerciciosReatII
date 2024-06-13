import React from 'react'
import { useState, useEffect } from 'react';

const Coordenadas = () => {

  const [coordenada, setCoordenada] = useState (
        {
            x: 0,
            y: 0
        }
    );
    useEffect(() => {
        const mouseMove = (x,y) => {
            setCoordenada({x,y});
        }
        window.addEventListener('movio el mouse', mouseMove);
        return () => {
            window.removeEventListener('movio el mouse', mouseMove);
        }
    }
    ,[])
  return (
    <div>{JSON.stringify(coordenada)}
    </div>
  )
}

export default Coordenadas
