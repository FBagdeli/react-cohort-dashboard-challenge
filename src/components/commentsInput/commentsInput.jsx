import { getInitials } from "../../utils/functions";
import InitialsButton from "../buttons/initialsButton";
import CommentInput from "../commentInput/commentInput.jsx";

const CommentsInput = ({ contactPost }) => {
  return (
    <div className="comments-input">
      <InitialsButton currentUser={contactPost}/>
      <CommentInput />
    </div>
  );
};

export default CommentsInput;
