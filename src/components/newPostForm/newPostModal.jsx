import { CloseButton } from "../buttons/CloseButton";
import InitialsButton from "../buttons/initialsButton";
import PostButton from "../buttons/postButton";
import TitleInput from "../titleInput/TitleInput";

export const NewPostModal = ({
  isFormVisible,
  currentUser,
  toggleFormVisibility,
  newPostHandleSubmit,
  handleTitleInput
}) => {
  return (
    <>
      {isFormVisible && (
        <form className="modal">
          <div>
            <InitialsButton currentUser={currentUser} />
            <TitleInput handleTitleInput={handleTitleInput} />
          </div>
          <textarea
            className="caption"
            placeholder="write the caption ..."
          ></textarea>
          <div className="form-buttons">
            <CloseButton toggleFormVisibility={toggleFormVisibility} />
            <PostButton newPostHandleSubmit={newPostHandleSubmit} />
          </div>
        </form>
      )}
    </>
  );
};
