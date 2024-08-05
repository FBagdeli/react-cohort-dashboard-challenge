
import Author from "../../authorName/postAuthor";
import PostTitle from "./postTitle";

const PostHeader = ({ post , contacts}) => {
  return (
    <div>
      <Author post={post} contacts={contacts}/>
      <PostTitle post={post} />
    </div>
  );
};

export default PostHeader
