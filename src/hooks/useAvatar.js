import {useProfile} from "./useProfile.js";

export const useAvatar = (post) => {
    const {state} = useProfile();

    const isMe = (post?.author?.id === state?.user?.id);
    const avatar = isMe ? `${state?.user?.avatar}` : `${post?.author?.avatar}`;

    const avatarURL = `${import.meta.env.VITE_SERVER_BASE_URL}/${avatar}`;

    return {avatarURL};
}
