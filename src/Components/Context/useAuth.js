import { useContext } from "react"
import { authContexts } from "./ContextProvider";

const useAuth = () =>{
    return useContext(authContexts)
}

export default useAuth;