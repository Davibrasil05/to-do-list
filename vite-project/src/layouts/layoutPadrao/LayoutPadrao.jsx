import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Rodape } from "../../components"
import { useContext } from "react"
import { AppContext } from "../../contexts"
const LayoutPadrao = () => {
    const {criador } = useContext(AppContext)
    return (

        <>
            <Cabecalho nomeusuario = "Davi"/>
            <Conteudo>
                <Outlet/>
            </Conteudo>
            <Rodape criador = {criador} />
        
        
        
        </>
    )
}

export {LayoutPadrao}