import style from "./ListaTarefas.module.css"
import { ListaTarefasItem } from "./listaTarefasItem"
const ListaTarefas = (props) =>{
    const {tarefas} = props;
    return(
            <ul className = {style.ListaTarefas}>
                {tarefas.map(item => <ListaTarefasItem key = {item.id} nome = {item.nome }/>)}
            </ul>
    )
}

export{ListaTarefas}