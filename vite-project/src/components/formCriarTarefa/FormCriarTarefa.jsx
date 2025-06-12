import { CampoTexto } from '../campotexto'
import { Botao } from '../botao'
import style from './FormCriarTarefa.module.css'
import { useState } from 'react'
import { useAppContext } from '../../hooks'
const FormCriarTarefa = () =>{
    const {adicionarTarefa} = useAppContext()
    const [nomeTarefa, setNomeTarefa] = useState("valorPadrao")
    const onChangeNomeTarefa = (event) =>{
        setNomeTarefa(event.currentTarget.value)
    }
    const submeterFormulario = (event) => {
        event.preventDefault()
        
        if(!nomeTarefa){
            return
        }
        
        adicionarTarefa(nomeTarefa)
        setNomeTarefa('')
     }
    return(
        <form className = {style.FormCriarTarefa} onSubmit = {submeterFormulario}>
            <CampoTexto value = {nomeTarefa} onChange ={onChangeNomeTarefa}/>
            <Botao texto ="+"/>
        </form>
    )
}

export{FormCriarTarefa}