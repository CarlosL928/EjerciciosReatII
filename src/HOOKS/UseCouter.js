import { useState } from 'react'

const UseCounter = (valor = 10) => {
  const [contador, setContador] = useState(valor);

  const incrementar = (valorSuma) => {
    setContador(contador + valorSuma);
  }

  const decrementar = (valorResta) => {
    setContador(contador - valorResta);
  }

  const reset = () => {
    setContador(valor);
  }


  return (
    { contador, incrementar, decrementar, reset }
  )
}

export default UseCounter