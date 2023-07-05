import React from "react"
import {Link} from "react-router-dom"

const Nav = (props) => {
        

    return (
        <>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/characters"}>Characters</Link>
                <Link to={"/characters/50/magic"}>Character</Link>

            </nav>
        </>
    )

}


export default Nav