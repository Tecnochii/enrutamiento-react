import { useContext, useEffect, useState } from "react"
import Buscador from "./Buscador"
import StateContext from "../../store/StateContext"



const Principal = () => {


    let {characters}  = useContext(StateContext)

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
        setPersonajes(characters)
        setPersonajesFiltrados(characters)
        console.log(characters);
    },[characters])


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