import NewPostForm from "../newPostForm/newPostForm.jsx";
import PostsList from "../postsList/postsList.jsx";

const MainContent = ({
  isFormVisible,
  toggleFormVisibility,
  handleTitleInput,
  newPostHandleSubmit,
  currentUser,
  posts,
  contacts,
  comments,
}) => {
  return (
    <div className="main-content">
      <NewPostForm
        isFormVisible={isFormVisible}
        toggleFormVisibility={toggleFormVisibility}
        handleTitleInput={handleTitleInput}
        newPostHandleSubmit={newPostHandleSubmit}
        currentUser={currentUser}
      />
      <PostsList posts={posts} contacts={contacts} comments={comments} />
    </div>
  );
};

export default MainContent;
