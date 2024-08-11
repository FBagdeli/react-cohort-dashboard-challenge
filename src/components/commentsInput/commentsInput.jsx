import InitialsButton from "../buttons/initialsButton";
import CommentInput from "../commentInput/commentInput.jsx";

const CommentsInput = ({
  contactPost,
  commentInputHandler,
  newCommentButton,
  post,
}) => {
  return (
    <div className="comments-input">
      <InitialsButton currentUser={contactPost} />
      <CommentInput
        commentInputHandler={commentInputHandler}
        newCommentButton={newCommentButton}
        post={post}
      />
    </div>
  );
};

export default CommentsInput;
