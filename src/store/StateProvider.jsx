import { useState } from "react"
import StateContext from "./StateContext"


const StateProvider = ({ children }) => {

    let [characters, setCharacters] = useState([])
    let [character, setCharacter] = useState({
        name: "",
        wand: {
            core: ""
        },
        house: ""
    })



    const getCharactersName = () => {
        return initialState.characters.map(character => character.name)
    }


    const addCharacter = (character) => {
       setCharacter([...initialState.characters, character]) 
    }

    const loadCharacters = (characters) => {
        setCharacters(characters)
    }

    const initialState = {
        characters,
        character,
        getCharactersName,
        addCharacter,
        loadCharacters
    }


    return (

        <StateContext.Provider value={initialState} >
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider