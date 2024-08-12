
import Author from "../../authorName/postAuthor";
import PostTitle from "./postTitle";

const PostHeader = ({ post , contacts, openPostHandler}) => {
  return (
    <div>
      <Author post={post} contacts={contacts}/>
      <PostTitle openPostHandler={openPostHandler} post={post} />
    </div>
  );
};

export default PostHeader
