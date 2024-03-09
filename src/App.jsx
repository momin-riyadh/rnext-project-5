import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
    return (
        <Routes>
            <Route element={<HomePage/>} path="/" exact/>
            <Route element={<LoginPage/>} path="/login"/>
            <Route element={<ProfilePage/>} path="/me"/>
            <Route element={<RegistrationPage/>} path="/register"/>

            <Route element={<NotFoundPage/>} path="*"></Route>
        </Routes>
    )
}

export default App
