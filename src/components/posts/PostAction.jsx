import React from 'react';
import LIKE_ICON from '../../assets/icons/like.svg'
import COMMENT_ICON from '../../assets/icons/comment.svg'
import SHARE_ICON from '../../assets/icons/comment.svg'

const PostAction = ({postId, commentCount}) => {
    return (
        <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
            {/*Like Button */}
            <button
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
            >
                <img src={LIKE_ICON} alt="Like"/>
                <span>Like</span>
            </button>

            {/*Comment Button*/}
            <button
                className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm"
            >
                <img src={COMMENT_ICON} alt="Comment"/>
                <span>Comment ( {commentCount ?? 0} )</span>
            </button>
            {/*Share Button*/}

            {/*Like Button*/}
            <button
                className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
            >
                <img src={SHARE_ICON} alt="Share"/>
                <span>Share</span>
            </button>
        </div>
    )
}

export default PostAction;
