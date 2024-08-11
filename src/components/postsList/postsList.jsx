import Post from "../post/post";

const PostsList = ({
  posts,
  contacts,
  comments,
  commentInputHandler,
  newCommentButton
}) => {
  return (
    <ul className="feed">
      {posts.toReversed().map((post, index) => {
        const contactPost = contacts.find((contact) => {
          
          return post.contactId === contact?.id;
        });
        
        return (
          <Post
            key={index}
            contactPost={contactPost}
            contacts={contacts}
            comments={comments}
            post={post}
            commentInputHandler={commentInputHandler}
            newCommentButton={newCommentButton}
          />
        );
      })}
    </ul>
  );
};

export default PostsList;
