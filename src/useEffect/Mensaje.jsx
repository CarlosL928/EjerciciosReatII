import React, { useEffect } from 'react'

const Mensaje = () => {

    useEffect(() => {
        console.log('Mensaje Arriba')
        return () => {
            console.log('Mensaje Caido')
  }  }, [])

  return (
    <div>
        <h3>Usuario Creado.</h3>
    </div>
  )
}

export default Mensaje