import { useContext } from "react";
import { AuthContext } from "../context/Authproverder";

const useAuth = () =>{

    return useContext(AuthContext);
 
}

export default useAuth;