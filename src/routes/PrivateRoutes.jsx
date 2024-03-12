import {useAuth} from "../hooks/useAuth.js";
import {Navigate, Outlet} from "react-router-dom";
import Header from "../components/common/Header.jsx";

const PrivateRoutes = () => {
    const {auth} = useAuth();
    return (
        <div>
            {
                auth.user ? (
                    <>
                        <Header/>
                        <main className="mx-auto max-w-[1020px] py-8">
                            <div className="container">

                                <Outlet/>
                            </div>
                        </main>
                    </>

                ) : (
                    <Navigate to="/login"/>
                )
            }
        </div>
    )
}

export default PrivateRoutes;
