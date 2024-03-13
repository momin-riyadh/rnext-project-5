import {useAuth} from "../hooks/useAuth.js";
import useAxios from "../hooks/useAxios.js";
import {useEffect, useState} from "react";


function ProfilePage() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const {api} = useAxios();
    const {auth} = useAuth();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get(`http://localhost:3000/profile/${auth?.user?.id}`);

                setUser(response?.data?.user);
                setPosts(response?.data?.posts);
            } catch (error) {
                console.error(error)
            }
        }

        fetchProfile();
    }, []);
    return (
        <div>Profile Page</div>
    );
}

export default ProfilePage;
