import MainContent from "../mainContent/mainContent";
import Aside from "../aside/aside";
const Main = ({
  handleInputeSubmit,
  newPostHandleSubmit,
  currentUser,
  posts,
  contacts,
  comments,
}) => {
  return (
    <main>
      <Aside />
      <MainContent
        handleInputeSubmit={handleInputeSubmit}
        newPostHandleSubmit={newPostHandleSubmit}
        currentUser={currentUser}
        posts={posts}
        contacts={contacts}
        comments={comments}
      />
    </main>
  );
};

export default Main;
