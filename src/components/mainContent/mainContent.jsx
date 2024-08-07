import NewPostForm from "../newPostForm/newPostForm.jsx";
import PostsList from "../postsList/postsList.jsx";

const MainContent = ({
  handleInputeSubmit,
  newPostHandleSubmit,
  currentUser,
  posts,
  contacts,
  comments,
}) => {
  return (
    <div className="main-content">
      <NewPostForm
        handleInputeSubmit={handleInputeSubmit}
        handleSubmit={newPostHandleSubmit}
        currentUser={currentUser}
      />
      <PostsList posts={posts} contacts={contacts} comments={comments} />
    </div>
  );
};

export default MainContent;
