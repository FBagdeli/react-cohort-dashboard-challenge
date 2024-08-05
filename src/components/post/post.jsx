import PostSection from "./postSection/postSection";
import CommentsList from "./commensList/commentsList";
import CommentsInput from "../commentsInput/commentsInput";

const Post = ({contactPost, contacts, comments, post}) => {
  return (
    <li >
      
      <PostSection post={post} contactPost={contactPost} contacts={contacts}/>
      <CommentsList comments={comments} post={post} contacts={contacts}/>
      <CommentsInput contactPost={contactPost}/>
    </li>
  );
};

export default Post