
import {useParams} from "react-router-dom"


const Character = ()=>{

    let params = useParams()

    console.log(params);


    
    return(


        <>
            <h2>Character con el id {params.id}</h2>
            <p>Casa {params.casa}</p>
        </>
    )
}

export default Character