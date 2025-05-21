import style from "./ListaTarefas.module.css"
import { ListaTarefasItem } from "./listaTarefasItem"
const ListaTarefas = () =>{
    return(
        <div >
            <ul className = {style.ListaTarefas}>
                <ListaTarefasItem nome = "nome1"/>
                <ListaTarefasItem nome = "nome2"/>
                <ListaTarefasItem nome = "nome3"/>
            </ul>
        </div>
    )
}

export{ListaTarefas}