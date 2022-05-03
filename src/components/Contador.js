import React, {useState, Fragment} from 'react';


const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar = () => {
        setNumero(numero +1)
    }

    return ( 
        <>
            <h3>Me diste click {numero} veces! </h3>
            <button onClick={aumentar}>Aumentar</button>
        </>
     );
}
 
export default Contador;