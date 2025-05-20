import style from "./Botao.module.css"
import {TIPO_BOTAO} from './constantes'
const Botao = (props) =>{
    const {texto, tipo = "TIPO_BOTAO.PRIMARIO", ...outrasprops} = props
    return(
        <button className = {style.Botao} tipo = {tipo} {...outrasprops}>
            {texto}
        </button>
    )
}
export {Botao}