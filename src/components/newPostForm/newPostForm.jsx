
import PlaceHolder from "../placeholder/postPlaceholder";
import PostButton from "../buttons/postButton";
import InitialsButton from "../buttons/initialsButton";

const NewPostForm = ({ currentUser }) => {
  return (
    <form>
      <InitialsButton currentUser={currentUser}/>
      <div>
        <PlaceHolder/>
        <PostButton/>
      </div>
    </form>
  );
};

export default NewPostForm;
