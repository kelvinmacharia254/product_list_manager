import {createContext, useContext} from "react";

const AppContext = createContext();

export default function AppContextProvider({children}){
        const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
        // console.log(BACKEND_BASE_URL)
        return(
            <AppContext.Provider value={{ BACKEND_BASE_URL }}>
                {children}
            </AppContext.Provider>
    )
}

export function useAppContext(){
    // console.log(AppContext)
    return useContext(AppContext)
}