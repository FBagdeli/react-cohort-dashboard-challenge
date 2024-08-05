import { GetCMInitials, GetNames } from "../../../utils/functions";

const CommentsList = ({ comments, post, contacts }) => {
  return (
    <ul className="comments">
        <p id="previous">See previous comments</p>

        {comments[post.id]?.map((c) => {
          return (
            <li key={c.id}>
              {/* {console.log(c.contactId)} */}
              <button id="userInitials">
                {GetCMInitials(c.contactId, contacts)}
              </button>
              <div>
                <p>
                  <span>{GetNames(c.contactId, contacts)}</span>
                </p>
                <p>{c.content}</p>
              </div>
            </li>
            // <li key={c.id}></li>
          );
        }) || "loading comments ... "}
      </ul>
  )
}

export default CommentsList