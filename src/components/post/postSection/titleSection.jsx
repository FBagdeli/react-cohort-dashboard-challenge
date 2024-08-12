import InitialsButton from "../../buttons/initialsButton";
import PostHeader from "./postHeader";

const TitleSection = ({ post, contactPost, contacts, openPostHandler }) => {
  return (
    <div className="section-title">
      <InitialsButton currentUser={contactPost} />
      <PostHeader
        post={post}
        contacts={contacts}
        openPostHandler={openPostHandler}
      />
    </div>
  );
};

export default TitleSection;
