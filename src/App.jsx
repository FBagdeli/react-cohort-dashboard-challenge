import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  const contactUrl = "https://boolean-uk-api-server.fly.dev/fbagdeli/contact";
  const postUrl = "https://boolean-uk-api-server.fly.dev/fbagdeli/post";

  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [NewTitlePost, setNewTitlePost] = useState({});
  const [isFormVisible, setFormVisible] = useState(false);
  const [newContentPost, setNewContentPost] = useState(null);
  const [commentInput, setCommentInput] = useState(null)
  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch(postUrl);
        const postsData = await postsResponse.json();
        setPosts(postsData);

        for (const post of postsData) {
          const commentsResponse = await fetch(`${postUrl}/${post.id}/comment`);
          const commentsData = await commentsResponse.json();
          setComments((prevComments) => ({
            ...prevComments,
            [post.id]: commentsData,
          }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    fetch(contactUrl)
      .then((res) => res.json())
      .then(setContacts);
  }, []);

  const currentUser = contactUrl.length > 0 ? contacts[0] : null;

  const newPostHandleButton = (event) => {
    event.preventDefault();
    setFormVisible(!isFormVisible);
    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        title: NewTitlePost,
        content: newContentPost,
        contactId: currentUser.id,
      }),
    });
  };

  const handleTitleInput = (event) => {
    const title = event.target.value;
    setNewTitlePost(title);
  };

  const handleContentInput = (event) => {
    const content = event.target.value;
    setNewContentPost(content);
  };

  const commentInputHandler = (event) => {
    const textComment = event.target.value;
    setCommentInput(textComment);
  };

  const newCommentButton = ({id}) => {
    fetch(`${postUrl}/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        postId: id,
        content: commentInput,
        contactId: currentUser.id
      })
    });
  };
  return (
    <div className="homePage">
      <Header currentUser={currentUser} />
      <Main
        handleContentInput={handleContentInput}
        isFormVisible={isFormVisible}
        toggleFormVisibility={toggleFormVisibility}
        handleTitleInput={handleTitleInput}
        newPostHandleButton={newPostHandleButton}
        currentUser={currentUser}
        posts={posts}
        contacts={contacts}
        comments={comments}
        commentInputHandler={commentInputHandler}
        newCommentButton={newCommentButton}
      />
    </div>
  );
}

export default App;
