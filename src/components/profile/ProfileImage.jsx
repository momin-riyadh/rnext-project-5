import EDIT from '../../assets/icons/edit.svg'
import {useProfile} from "../../hooks/useProfile.js";
import useAxios from "../../hooks/useAxios.js";
import {useRef} from "react";


function ProfileImage() {
    const {state, dispatch} = useProfile();
    const api = useAxios();
    const fileUploadRef = useRef();

    const handleImageUpload = (event) => {
        event.preventDefault()
        fileUploadRef.current.click();
    }

    return (
        <div
            className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]"
        >
            <img
                className="max-w-full rounded-full w-52 h-52"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
                alt={state?.user?.firstName}
            />
            <form>
                <button type="submit"
                        className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
                        onClick={handleImageUpload}
                >
                    <img src={EDIT} alt="Edit"/>
                </button>
                <input ref={fileUploadRef} type="file" name="" id="" hidden/>
            </form>

        </div>
    );
}

export default ProfileImage;
