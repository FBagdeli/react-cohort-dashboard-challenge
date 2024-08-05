import NewPostForm from "../components/newPostForm/newPostForm.jsx";
import { GetCMInitials, getInitials, GetNames } from "../utils/functions.js";

GetNames;
const MainContent = ({ currentUser, posts, contacts, comments }) => {
  return (
    <div className="main-content">
      <form>
        <button id="userInitials">{getInitials(currentUser)}</button>
        <div>
          <input placeholder="whats on your mind?"></input>
          <button>Post</button>
        </div>
      </form>
      <NewPostForm currentUser = {currentUser}/>
      <ul className="feed">
        {posts.map((post, index) => {
          const contactPost = contacts.find(
            (contact) => post.contactId === contact?.id
          );
          //  console.log(post)
          return (
            <li key={index}>
              <section>
                <div className="section-title">
                  <button id="userInitials">{getInitials(contactPost)}</button>
                  <div>
                    <p id="title">{GetNames(post, contacts)}</p>
                    <p>
                      <span>{post.title}</span>
                    </p>
                  </div>
                </div>
                <p>{post.content}</p>
              </section>
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
              <div className="comments-input">
                <button id="userInitials">{getInitials(contactPost)}</button>
                <div>
                  <input type="text" placeholder="Add a comment..."></input>

                  <svg
                    width="800px"
                    height="800px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                  >
                    <title>send-email</title>
                    <desc>Created with Sketch Beta.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                      sketch:type="MSPage"
                    >
                      <g
                        id="Icon-Set-Filled"
                        sketch:type="MSLayerGroup"
                        transform="translate(-570.000000, -257.000000)"
                        fill="#000000"
                      >
                        <path
                          d="M580.407,278.75 C581.743,281.205 586,289 586,289 C586,289 601.75,258.5 602,258 L602.02,257.91 L580.407,278.75 L580.407,278.75 Z M570,272 C570,272 577.298,276.381 579.345,277.597 L601,257 C598.536,258.194 570,272 570,272 L570,272 Z"
                          id="send-email"
                          sketch:type="MSShapeGroup"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainContent;
