import { GetNames } from "../../utils/functions";

const Author = ({post, contacts}) => {
  return <p id="title">{GetNames(post.id, contacts)}</p>;
};

export default Author
