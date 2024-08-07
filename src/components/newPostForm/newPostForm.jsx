import PlaceHolder from "../placeholder/postPlaceholder";
import PostButton from "../buttons/postButton";
import InitialsButton from "../buttons/initialsButton";

const NewPostForm = ({ handleInputeSubmit, handleSubmit, currentUser }) => {
  return (
    <form>
      <InitialsButton currentUser={currentUser} />
      <div>
        <input
          placeholder="whats on your mind?"
          onChange={handleInputeSubmit}
        ></input>
        <button onClick={handleSubmit}>Post</button>;
      </div>
    </form>
  );
};

export default NewPostForm;
