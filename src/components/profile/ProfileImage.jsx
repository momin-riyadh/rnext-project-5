import EDIT from '../../assets/icons/edit.svg'
import {useProfile} from "../../hooks/useProfile.js";
import useAxios from "../../hooks/useAxios.js";
import {useRef} from "react";
import {actions} from "../../actions/index.js";


function ProfileImage() {
    const {state, dispatch} = useProfile();
    const {api} = useAxios();
    const fileUploadRef = useRef();

    const handleImageUpload = (event) => {
        event.preventDefault();
        fileUploadRef.current.addEventListener("change", updateImageDisplay)
        fileUploadRef.current.click();
    }

    const updateImageDisplay = async () => {

        try {
            const formData = new FormData()
            for (const file of fileUploadRef.current.files) {
                formData.append("avatar", file);
            }

            const response = await api.post(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}/avatar`, formData);

            if (response.status === 200) {
                dispatch({type: actions.profile.IMAGE_UPDATED, data: response.data})
            }
        } catch (error) {
            dispatch({type: actions.profile.DATA_FETCH_ERROR, error: error.message})
        }


    }

    return (
        <div
            className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]"
        >
            <img
                className="rounded-full w-[150px] h-[150px] object-cover"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`}
                alt={state?.user?.firstName}
            />
            <form id="form" encType="multipart/form-data">
                <button type="submit"
                        className="flex-center absolute bottom-3 right-3 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
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
