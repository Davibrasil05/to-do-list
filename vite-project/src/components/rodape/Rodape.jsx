import style from "./Rodape.module.css"

const Rodape = (props) =>{
    const { criador} = props;
    const anoAtual = (new Date()).getFullYear();
    return(
        <div className = {style.Rodape}>
            <footer>
                <p>
                    React Basico - {anoAtual} - {criador}
                </p>
                
            </footer>
                
            
        </div>
        
    )
}

export {Rodape}