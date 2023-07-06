
import { useEffect, useRef } from "react"
import "./styles/buscador.css"


function Buscador(props) {

    // let inputTexto = useRef()
    let name = useRef()
    let apellido = useRef()
    let telefono = useRef()
    let cumpleaños = useRef()
    let email = useRef()

        
    function mostrarForm(){
        console.log(name.current.value, apellido.current.value, telefono.current.value, cumpleaños.current.value, email.current.value);
    }


    useEffect(()=>{
    },[])

   
    return (
        <>
            <div className="container-buscador">

                    <label  className="label-input-buscador" htmlFor="">
                        Nombre
                        <input type="text" ref={name}/>
                        <input type="text" ref={apellido}/>
                        <input type="text" ref={email}/>
                        <input type="text" ref={telefono}/>
                        <input type="text" ref={cumpleaños}/>


                    </label>

                <input onClick={()=>mostrarForm()} className="btn-buscador" type="button" value="buscar" />
            </div>
        </>
    )

}

export default Buscador