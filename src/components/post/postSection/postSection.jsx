import TitleSection from "./titleSection";

const PostSection = ({ post, contactPost, openPostHandler }) => {
  return (
    <section>
      <TitleSection
        post={post}
        contactPost={contactPost}
        openPostHandler={openPostHandler}
      />
      <p>{post.content}</p>
    </section>
  );
};

export default PostSection;
