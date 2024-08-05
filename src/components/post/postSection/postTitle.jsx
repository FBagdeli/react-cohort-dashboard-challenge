import { GetNames } from "../../../utils/functions";

const PostAuthor = ({post, contacts}) => {
  return <p id="title">{GetNames(post.id, contacts)}</p>;
};

export default PostAuthor
