
import './App.css'
import {Cabecalho, Conteudo, Rodape} from './components'
import {Inicial} from './pages'

const App = ()  => {
  //O <> É a fragmentação dos arquivos
  return (
    <>

      <Cabecalho nomeusuario = "Davi"/>
      <Conteudo>
        <Inicial/>
      </Conteudo>
      <Rodape criador = "Davi" />     
    </>
  )
}

export {App} //Exporta o aplicativo para outros arquivos
