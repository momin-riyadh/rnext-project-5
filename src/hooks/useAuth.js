import {useContext} from "react";
import {AuthContext} from "../context/index.js";


function useAuth() {
    return useContext(AuthContext);
}

export {useAuth};
