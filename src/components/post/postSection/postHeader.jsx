import PostTitle from "./postContent";
import PostAuthor from "./postTitle";

const PostHeader = ({ post, contacts }) => {
  return (
    <div>
      <PostAuthor post={post} contacts={contacts} />
      <PostTitle post={post} />
    </div>
  );
};

export default PostHeader;
