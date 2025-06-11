
import { BrowserRouter } from 'react-router-dom'
import {Router} from './Router'
import { AppContextProvider } from './contexts'

const App = ()  => {
  //O <> É a fragmentação dos arquivos
  return (
    <AppContextProvider>
      <BrowserRouter>
          <Router/>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export {App} //Exporta o aplicativo para outros arquivos
 