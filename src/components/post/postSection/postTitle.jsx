const PostTitle = ({post, openPostHandler}) => {
  return (
    <p>
      <span onClick={() => openPostHandler(post)}>{post.title}</span>
    </p>
  );
};

export default PostTitle