import {CampoTexto, Botao} from '../campotexto'

import style from './FormCriarTarefa.module.css'
import { useState } from 'react'
const FormCriarTarefa = (props) =>{
    const {nomeTarefa, setNomeTarefa} = useState("valorPadrao")
    const{setTarefas} = props;
    const adicionarTarefa = () => {
        return(
            <div>

            </div>
        )
    }
    return(
        <form className = {style.FormCriarTarefa}>
            <CampoTexto value = {nomeTarefa}/>
            <Botao texto ="+"/>
        </form>
    )
}

export{FormCriarTarefa}