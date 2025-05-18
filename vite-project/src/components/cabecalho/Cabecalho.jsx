import style from "./Cabecalho.module.css"

const Cabecalho = (props) => {
    return(
        <div className = {style.Cabecalho}>
            <h1>
                <span>ToDo </span>
                 list
            </h1>
        </div>
    )
}

export {Cabecalho} // Necessario para que seja possivel utilizar no componente App por exemplo