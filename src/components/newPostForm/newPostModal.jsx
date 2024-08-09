import { CloseButton } from "../buttons/CloseButton";
import InitialsButton from "../buttons/initialsButton";
import PostButton from "../buttons/postButton";
import TitleInput from "../titleInput/TitleInput";

export const NewPostModal = ({
  handleContentInput,
  isFormVisible,
  toggleFormVisibility,
  handleTitleInput,
  newPostHandleButton,
  currentUser,
}) => {
  return (
    <>
      {isFormVisible && (
        <form className="modal" onSubmit={newPostHandleButton}>
          <div>
            <InitialsButton currentUser={currentUser} />
            <TitleInput handleTitleInput={handleTitleInput} />
          </div>
          <textarea
            className="caption"
            placeholder="write the caption ..."
            onChange={handleContentInput}
          />
          <div className="form-buttons">
            <CloseButton toggleFormVisibility={toggleFormVisibility} />
            <PostButton />
          </div>
        </form>
      )}
    </>
  );
};
