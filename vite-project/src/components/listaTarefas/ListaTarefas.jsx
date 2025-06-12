import style from "./ListaTarefas.module.css"
import { ListaTarefasItem } from "./listaTarefasItem"
import { useAppContext } from "../../hooks"
const ListaTarefas = () =>{
    const {tarefas} = useAppContext()
    return(
            <ul className = {style.ListaTarefas}>
                {!tarefas.length && (
                    <p>Sem tarefas cadastradas...</p>
                )}
                {tarefas.map(item => 
                <ListaTarefasItem 
                    key = {item.id} 
                    id ={item.id} 
                    nome = {item.nome }
                />)}
            </ul>
    )
}

export{ListaTarefas}