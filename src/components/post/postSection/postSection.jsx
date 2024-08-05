import TitleSection from "./titleSection";

const PostSection = ({ post, contactPost, contacts }) => {
  return (
    <section>
      <TitleSection post={post} contactPost={contactPost} contacts={contacts} />
      <p>{post.content}</p>
    </section>
  );
};

export default PostSection;
