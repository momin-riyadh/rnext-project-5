import {useContext} from "react";
import {ProfileContext} from "../context/index.js";
 const useProfile = () => {
    return useContext(ProfileContext)
}
