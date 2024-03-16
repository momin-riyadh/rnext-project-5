import LOGO from "../../assets/images/logo.svg";
import HomeIcon from "../../assets/icons/home.svg";
import Notification from "../../assets/icons/notification.svg";

import {Link} from "react-router-dom";
import Logout from "../auth/Logout.jsx";
import {useAuth} from "../../hooks/useAuth.js";
import {useProfile} from "../../hooks/useProfile.js";


function Header() {
    const { auth } = useAuth();
    const { state } = useProfile();

    const user = state?.user ?? auth?.user;
    return (
        // Navbar
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
            <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
                {/*Logo*/}
                <Link to="/">
                    <img className="max-w-[100px] rounded-full lg:max-w-[130px]" src={LOGO}/>
                </Link>
                {/*nav links*/}

                <div className="flex items-center space-x-4">
                    <Link to="/" className="btn-primary">
                        <img src={HomeIcon} alt="Home"/>
                        Home
                    </Link>
                    <button className="icon-btn">
                        <img src={Notification} alt="Notification"/>
                    </button>
                    <Logout/>

                    <Link to="/me" className="flex-center !ml-8 gap-3">
                        <span className="text-lg font-medium lg:text-xl">{user?.firstName} {' '} {user?.lastName}</span>
                        <img className="h-[32px] w-[32px] lg:h-[44px] lg:w-[44px] rounded-full object-cover"
                             src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}`} alt="avatar"/>
                    </Link>
                </div>
                {/*nav links ends*/}
            </div>
        </nav>
    );
}

export default Header;
