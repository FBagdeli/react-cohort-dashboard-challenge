import ProfileButton from "../buttons/profileButton";
import { GetCMInitials, getInitials, GetNames } from "../../utils/functions";
import Post from "../post/post";

const PostsList = ({ posts, contacts, comments}) => {
  return (
    <ul className="feed">
      {posts.map((post, index) => {
        const contactPost = contacts.find(
          (contact) => post.contactId === contact?.id
        );
        return(
          <Post key={index} contactPost={contactPost} contacts={contacts} comments={comments} post={post} />
        )
      })}
    </ul>
  );
};


export default PostsList