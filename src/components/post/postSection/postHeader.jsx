import Author from "../../authorName/postAuthor";
import PostTitle from "./postTitle";

const PostHeader = ({ post, openPostHandler, currentUser }) => {
  return (
    <div>
      <Author currentUser={currentUser} />
      <PostTitle openPostHandler={openPostHandler} post={post} />
    </div>
  );
};

export default PostHeader;
