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
  const [newPostContent, setNewPostContent] = useState({});
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

  const newPostHandleSubmit = (event) => {
    event.preventDefault();
    console.log(newPostContent);
    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newPostContent),
    })
  };

  const handleInputeSubmit = (event) => {

    const content = event.target.value;
    setNewPostContent({
      "title":content,
      "content": content,
      "contactId": currentUser.id
    })
  };
  return (
    <div className="homePage">
      <Header currentUser={currentUser} />
      <Main
        handleInputeSubmit={handleInputeSubmit}
        newPostHandleSubmit={newPostHandleSubmit}
        currentUser={currentUser}
        posts={posts}
        contacts={contacts}
        comments={comments}
      />
    </div>
  );
}

export default App;
