import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Rodape } from "../../components"
const LayoutPadrao = () => {
    return (

        <>
            <Cabecalho nomeusuario = "Davi"/>
            <Conteudo>
                <Outlet/>
            </Conteudo>
            <Rodape criador = "Davi" />
        
        
        
        </>
    )
}

export {LayoutPadrao}