import MainContent from "../mainContent/mainContent";
import Aside from "../aside/aside";
const Main = ({
  handleContentInput,
  isFormVisible,
  toggleFormVisibility,
  handleTitleInput,
  newPostHandleButton,
  currentUser,
  posts,
  contacts,
  comments,
}) => {
  return (
    <main>
      <Aside />
      <MainContent
        handleContentInput={handleContentInput}
        isFormVisible={isFormVisible}
        toggleFormVisibility={toggleFormVisibility}
        handleTitleInput={handleTitleInput}
        newPostHandleButton={newPostHandleButton}
        currentUser={currentUser}
        posts={posts}
        contacts={contacts}
        comments={comments}
      />
    </main>
  );
};

export default Main;
