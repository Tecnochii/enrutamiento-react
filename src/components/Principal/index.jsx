import { useEffect, useState } from "react"
import Buscador from "./Buscador"




const Principal = (props) => {

    let [personajes, setPersonajes] = useState([])

    

    let [personajesFiltrados, setPersonajesFiltrados] = useState([])


    const filtrarPersonajes = (text) => {
           let personajesFiltradosPorTexto = personajes.filter((personaje) => personaje.name == text)


           if(text == "") {
            setPersonajesFiltrados(personajes)
           }else{
            setPersonajesFiltrados(personajesFiltradosPorTexto)
            console.log(personajesFiltradosPorTexto);
            console.log("Filtra");
           }

    }


    useEffect(()=>{
        setPersonajes(props.personajes)
        setPersonajesFiltrados(props.personajes)
        console.log(props.personajes);
    },[props.personajes])


    return (
        <>
            {personajesFiltrados.map((personaje, index) => {
                return <div key={index}>
                    <p>{personaje.name}</p>
                   
                </div>
            })
            }

            <Buscador filtrarPersonajes={filtrarPersonajes}  />


        </>
    )
}


export default Principal;