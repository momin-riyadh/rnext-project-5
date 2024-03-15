import {useAuth} from "../hooks/useAuth.js";
import useAxios from "../hooks/useAxios.js";
import {useEffect} from "react";
import {useProfile} from "../hooks/useProfile.js";
import {actions} from "../actions/index.js";


function ProfilePage() {
    const {state, dispatch} = useProfile();
    const {api} = useAxios();
    const {auth} = useAuth();

    useEffect(() => {
        dispatch({type: actions.profile.DATA_FETCHING})
        const fetchProfile = async () => {
            try {
                const response = await api.get(`http://localhost:3000/profile/${auth?.user?.id}`);

                if (response.status === 200) {
                    dispatch({type: actions.profile.DATA_FETCHED, data: response.data})
                }
            } catch (error) {
                console.error(error)
                dispatch({type: actions.profile.DATA_FETCH_ERROR, error: error.message})
            }
        }

        fetchProfile();
    }, []);

    if (state?.loading) {
        return <div>Fetching your profile data...</div>
    }

    return (
        <div>
            Welcome, {state?.user?.firstName}{' '}{state?.user?.lastName}
            <p>You have {state?.posts?.length} posts</p>
        </div>
    );
}

export default ProfilePage;
