import style from "./ListaTarefas.module.css"
import { ListaTarefasItem } from "./listaTarefasItem"
const ListaTarefas = () =>{
    const tarefas = [
        {id: 1, nome: "item 1"},
        {id: 2, nome: "item 2"},
        {id: 3, nome: "item 3"}

    ]
    return(
            <ul className = {style.ListaTarefas}>
                {tarefas.map(item => <ListaTarefasItem key = {item.id} nome = {item.nome }/>)}
            </ul>
    )
}

export{ListaTarefas}