import InitialsButton from "../../buttons/initialsButton";
import PostHeader from "./postHeader";

const TitleSection = ({ post, contactPost, contacts }) => {
  return (
    <div className="section-title">
      <InitialsButton currentUser={contactPost} />
      <PostHeader post={post} contacts={contacts} />
    </div>
  );
};

export default TitleSection;
