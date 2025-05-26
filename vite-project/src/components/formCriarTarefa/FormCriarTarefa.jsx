import { CampoTexto } from '../campotexto'
import { Botao } from '../botao'
import style from './FormCriarTarefa.module.css'
import { useState } from 'react'
const FormCriarTarefa = (props) =>{
    const [nomeTarefa, setNomeTarefa] = useState("valorPadrao")
    const{setTarefas} = props;
    const onChangeNomeTarefa = (event) =>{
        setNomeTarefa(event.currentTarget.value)
    }
    const adicionarTarefa = (event) => {
        event.preventDefault()
        
        if(!nomeTarefa){
            return
        }
        setTarefas(estadoAtual => {
            const tarefa = {
                id: estadoAtual.length + 1,
                nome: nomeTarefa,
            }
            return[
                ...estadoAtual,
                tarefa,
            ]
        })
        setNomeTarefa('')
     }
    return(
        <form className = {style.FormCriarTarefa} onSubmit = {adicionarTarefa}>
            <CampoTexto value = {nomeTarefa} onChange ={onChangeNomeTarefa}/>
            <Botao texto ="+"/>
        </form>
    )
}

export{FormCriarTarefa}