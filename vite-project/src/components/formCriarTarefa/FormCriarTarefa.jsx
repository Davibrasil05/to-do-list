import {CampoTexto} from '../campotexto'
import {Botao} from '../botao'
import style from './FormCriarTarefa.module.css'
const FormCriarTarefa = () =>{
    return(
        <form className = {style.FormCriarTarefa}>
            <CampoTexto/>
            <Botao texto ="+"/>
        </form>
    )
}

export{FormCriarTarefa}