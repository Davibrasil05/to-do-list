import { Link } from "react-router-dom"
import style from "./Cabecalho.module.css"

const Cabecalho = (props) => {
    return(
        <div className = {style.Cabecalho}>
            <Link to = "/">
                <h1>
                    <span>ToDo </span>
                    list
                </h1>
            </Link>

            <Link to = "/sobre-nos"> Sobre Nós</Link>
        </div>
    )
}

export {Cabecalho} // Necessario para que seja possivel utilizar no componente App por exemplo