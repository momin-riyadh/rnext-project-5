import Header from "../components/common/Header.jsx";
import {useAuth} from "../hooks/useAuth.js";


function HomePage() {
    const {auth} = useAuth();
    console.log(auth);
    return (
        <>
            <Header/>
            <p>Homepage</p>
        </>


    );
}

export default HomePage;
