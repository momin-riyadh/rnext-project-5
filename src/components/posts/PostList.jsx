import PostCard from "./PostCard.jsx";


const PostList = ({posts}) => (
    !!posts && posts.map(post => <PostCard key={post.id} post={post}/>
    )
);

export default PostList;
