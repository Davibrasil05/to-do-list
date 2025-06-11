import { useContext } from 'react';
import { AppContext } from '../contexts'; // Importa o contexto
const useAppContext = () => {
    const contexto  = useContext(AppContext) //context API
    return contexto;
}
export{useAppContext}