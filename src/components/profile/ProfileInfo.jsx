import ProfileImage from "./ProfileImage.jsx";
import Bio from "./Bio.jsx";
import {useProfile} from "../../hooks/useProfile.js";

function ProfileInfo() {
    const {state} = useProfile()
    return (
        <div>
            {/*profile info*/}
            <div className="flex flex-col items-center py-8 text-center">
                {/*profile image*/}
                <ProfileImage/>
                {/*name , email*/}
                <div>
                    <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                        {state?.user?.firstName} {' '}
                        {state?.user?.lastName}
                    </h3>
                    <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
                </div>

                {/*bio*/}
                <Bio/>
                <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
            </div>
            {/*end profile info*/}
        </div>
    );
}

export default ProfileInfo;
