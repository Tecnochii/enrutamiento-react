
import "./styles/buscador.css"


function Buscador(props) {

    let textoDelInput = ""


    return (
        <>
            <div className="container-buscador">

                <form onChange={(event) => console.log(event)}>
                    <label className="label-input-buscador" htmlFor="">
                        Nombre
                        <input type="text"  />
                    </label>
                </form>

                <input onClick={() => props.filtrarPersonajes(textoDelInput)} className="btn-buscador" type="button" value="buscar" />
            </div>
        </>
    )

}

export default Buscador