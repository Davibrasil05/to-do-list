import { createContext, useState } from "react"

export const AppContext = createContext({})

export const AppContextProvider = (props) => {
    const {children} = props

    const [criador, setCriador] = useState("Davi")

    return(
        <AppContext.Provider value = {{
            criador,
        }}>
            {children}
        </AppContext.Provider>
    )
}
