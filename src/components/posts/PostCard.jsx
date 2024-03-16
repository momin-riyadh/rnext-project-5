import PostHeader from "./PostHeader.jsx";
import PostBody from "./PostBody.jsx";
import PostAction from "./PostAction.jsx";
import PostComments from "./PostComments.jsx";

const PostCard = ({post}) => {
        return (
            <article className="card mt-6 lg:mt-8">
                <PostHeader post={post}/>

                <PostBody/>

                <PostAction/>

                <PostComments/>
            </article>
        )
    }
;

export default PostCard;
