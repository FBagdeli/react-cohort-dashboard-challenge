import MainContent from "../mainContent/mainContent";
import Aside from "../aside/aside";
const Main = ({
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
    <main>
      <Aside />
      <MainContent
        isFormVisible={isFormVisible}
        toggleFormVisibility={toggleFormVisibility}
        handleTitleInput={handleTitleInput}
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
