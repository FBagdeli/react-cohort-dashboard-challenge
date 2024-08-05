import NewPostForm from "../newPostForm/newPostForm.jsx";
import PostsList from "../postsList/postsList.jsx";

const MainContent = ({ currentUser, posts, contacts, comments }) => {
  return (
    <div className="main-content">
      <NewPostForm currentUser = {currentUser}/>
      <PostsList posts={posts} contacts={contacts} comments={comments}/>
    </div>
  );
};

export default MainContent;
