// create context 


//Provider


//consumer   to overcome this we use useContext Api


import { createContext } from "react";

const AppContext = createContext()

const AppProvider = ({children})=>{
    const data = {
        name:"Dyanix",
        age:22
      }
    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>

}

export {AppProvider,AppContext}