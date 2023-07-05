import React from "react"
import Nav from "./Nav"


const Header = (props) => {




    return (

        <>
            <h1>{props.tiulo ? props.tiulo : "Titulo"}</h1>
            <Nav />
        </>
    )

}


export default Header