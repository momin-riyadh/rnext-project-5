import {useReducer, useEffect} from "react";
import {postReducer, initialState} from "../reducers/PostReducre.jsx";
import useAxios from "../hooks/useAxios.js";
import PostList from "../components/posts/PostList.jsx";
import {actions} from "../actions/index.js";


function HomePage() {

    const [state, dispatch] = useReducer(postReducer, initialState);
    const {api} = useAxios();

    useEffect(() => {
        dispatch({type: actions.post.DATA_FETCHING});
        const fetchPost = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/posts`);
                if (response.status === 200) {
                    dispatch({type: actions.post.DATA_FETCHED, data: response.data})
                }
            } catch (error) {
                console.log(error);
                dispatch({type: actions.post.DATA_FETCH_ERROR, error: error.message})

            }
        }

        fetchPost()
    }, [])
    if (state?.loading) {
        return <div>We are working...</div>
    }
    if (state?.error) {
        return <div>Error in fetching posts {state?.error?.message}</div>
    }

    return (
        <>
            <PostList posts={state?.post}/>
        </>

    );
}

export default HomePage;
