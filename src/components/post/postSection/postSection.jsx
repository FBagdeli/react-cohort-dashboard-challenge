import TitleSection from "./titleSection";

const PostSection = ({ post, contactPost, contacts, openPostHandler }) => {
  return (
    <section>
      <TitleSection
        post={post}
        contactPost={contactPost}
        contacts={contacts}
        openPostHandler={openPostHandler}
      />
      <p>{post.content}</p>
    </section>
  );
};

export default PostSection;
