
import PlaceHolder from "../placeholder/postPlaceholder";
import ProfileButton from "../buttons/profileButton";
import PostButton from "../buttons/postButton";

const NewPostForm = ({ currentUser }) => {
  return (
    <form>
      <ProfileButton currentUser={currentUser}/>
      <div>
        <PlaceHolder/>
        <PostButton/>
      </div>
    </form>
  );
};

export default NewPostForm;
