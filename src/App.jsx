import {Routes, Route} from "react-router-dom";

function App() {


    return (
        <>
            <Routes>
                <Route element={<HomePage/>} path="/"/>
                <Route element={<LoginPage/>} path="/login"/>
                <Route element={<ProfilePage/>} path="/me"/>
                <Route element={<RegistrationPage/>} path="/register"/>
               
                <Route element={<NotFoundPage/>} path="*"></Route>
            </Routes>
        </>
    )
}

export default App
