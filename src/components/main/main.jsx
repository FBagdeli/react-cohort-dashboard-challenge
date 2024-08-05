import MainContent from "../mainContent/mainContent";
import { GetCMInitials, getInitials, GetNames } from "../../utils/functions";
import Aside from "../aside/aside";
const Main = ({ currentUser, posts, contacts, comments }) => {
  return (
    <main>
      <Aside/>
      <MainContent currentUser = { currentUser } posts = { posts} contacts = {contacts} comments = {comments}/>
    </main>
  );
};

export default Main;
