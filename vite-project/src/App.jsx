
import './App.css'
import {Cabecalho, Conteudo, Rodape} from './components'

const App = ()  => {
  //O <> É a fragmentação dos arquivos
  return (
    <>

      <Cabecalho nomeusuario = "Davi"/>
      <Conteudo>
        <h1 >Titulo</h1>
        <p>Texto exto texto</p>
      </Conteudo>
      <Rodape criador = "Davi" >     
      </Rodape>
    </>
  )
}

export {App} //Exporta o aplicativo para outros arquivos
