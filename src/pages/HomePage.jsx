import {useAuth} from "../hooks/useAuth.js";
import {Link} from "react-router-dom";


function HomePage() {
    const {auth} = useAuth();
    console.log(auth);
    return (
        <>

            <p>Homepage</p>
            <Link to="me">Go to Profile Page</Link>
        </>


    );
}

export default HomePage;
