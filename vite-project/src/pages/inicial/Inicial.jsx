import { useState } from "react"
import { FormCriarTarefa, ListaTarefas} from "../../components"
import style from "./Inicial.module.css"
const Inicial = () => {
    const[tarefas,setTarefas] = useState([
        {id: 1, nome: "item 1"},
        {id: 2, nome: "item 2"},
        {id: 3, nome: "item 3"},

    ])
    return(
            <div className = {style.Inicial}>
                <FormCriarTarefa setTarefas = {setTarefas}/>
                <ListaTarefas tarefas = {tarefas}/>
            </div>
    )
}
export {Inicial}