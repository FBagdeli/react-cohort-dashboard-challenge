
import PostButton from "../buttons/postButton";
import InitialsButton from "../buttons/initialsButton";
import { NewPostModal } from "./newPostModal";
import TitleInput from "../titleInput/TitleInput";

const NewPostForm = ({
  isFormVisible,
  toggleFormVisibility,
  handleTitleInput,
  newPostHandleSubmit,
  currentUser,
}) => {
  return (
    <form>
      <InitialsButton currentUser={currentUser} />
      <div onClick={toggleFormVisibility}>
        <TitleInput handleTitleInput={handleTitleInput} />
        <PostButton newPostHandleSubmit={newPostHandleSubmit} />
      </div>
      <NewPostModal
        isFormVisible={isFormVisible}
        currentUser={currentUser}
        toggleFormVisibility={toggleFormVisibility}
        newPostHandleSubmit={newPostHandleSubmit}
        handleTitleInput = {handleTitleInput}
      />
    </form>
  );
};

export default NewPostForm;
