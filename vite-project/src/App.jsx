
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import {Cabecalho, Conteudo, Rodape} from './components'
import {Inicial} from './pages'
import {Router} from './Router'

const App = ()  => {
  //O <> É a fragmentação dos arquivos
  return (
    <BrowserRouter>
        <Router/>
      {/*<Cabecalho nomeusuario = "Davi"/>
      <Conteudo>
        <Inicial/>
      </Conteudo>
      <Rodape criador = "Davi" />*/}  
    </BrowserRouter>
  )
}

export {App} //Exporta o aplicativo para outros arquivos
 