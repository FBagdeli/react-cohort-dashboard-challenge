import { getInitials } from "../../utils/functions";
import PlaceHolder from "../placeholder/postPlaceholder";
import ProfileButton from "../buttons/profileButton";

const NewPostForm = ({ currentUser }) => {
  return (
    <form>
      <ProfileButton currentUser={currentUser}/>
      <div>
        <PlaceHolder/>
        <button>Post</button>
      </div>
    </form>
  );
};

export default NewPostForm;
