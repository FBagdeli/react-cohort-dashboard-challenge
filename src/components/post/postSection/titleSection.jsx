import InitialsButton from "../../buttons/initialsButton";
import PostHeader from "./postHeader";

const TitleSection = ({ post, contactPost, openPostHandler }) => {
  return (
    <div className="section-title">
      <InitialsButton currentUser={contactPost} />
      <PostHeader
        currentUser={contactPost}
        post={post}
        openPostHandler={openPostHandler}
      />
    </div>
  );
};

export default TitleSection;
