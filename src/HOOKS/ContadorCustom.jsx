import useContador from './UseCouter'
import './ContadorCustom.css'

const ContadorCustom = ({valorincrementar, valordecrementar}) => {

 const {contador, incrementar, decrementar, reset} = useContador();
  return (
    <div>
    <h1 className='tituloContador' > Contador propio {contador}</h1>
    <button onClick={()=> decrementar(valordecrementar)}>-{valordecrementar}</button>
    <button onClick={()=> reset()}>Reset</button>
    <button onClick={()=> incrementar(valorincrementar)}>+{valorincrementar}</button>
    </div>
  )
};

export default ContadorCustom