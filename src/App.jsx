import { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { getInitials } from "./utils/functions";
import Header from "./components/header/header";
import Main from "./components/main/main";

function App() {
  const contactUrl = "https://boolean-uk-api-server.fly.dev/fbagdeli/contact";
  const postUrl = "https://boolean-uk-api-server.fly.dev/fbagdeli/post";

  const [contacts, setContacts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

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

  // const GetCMInitials = (id) => {
  //   const user = contacts.find((c) => c.id === id);
  //   if (user === undefined) return "";
  //   const userName = user.firstName.charAt(0) + user.lastName.charAt(0);
  //   return userName;
  // };

  // function getNames(post = { contactId: 0 }) {
  //   // console.log('post', post)
  //   const contactObject = contacts.find(
  //     (contact) => contact.id === post.contactId
  //   );
  //   if (contactObject !== undefined) {
  //     const fullName = contactObject.firstName + " " + contactObject.lastName;
  //     return fullName;
  //   } else return 0;
  // }

  // const GetNames = (id) => {
  //   const user = contacts.find((c) => c.id === id);
  //   if (user === undefined) return "";
  //   const userName = user.firstName + " " + user.lastName;
  //   return userName;
  // };

  // const GetComments = async (id) => {
  //   const cm = comments[id];
  //   if (cm !== undefined) {
  //     return cm;
  //   }
  //   try {
  //     const commentsResponse = await fetch(`${postUrl}/${id}/comment`);
  //     const commentsData = await commentsResponse.json();
  //     // Update the state with the newly fetched comments
  //     setComments((prevComments) => ({
  //       ...prevComments,
  //       [id]: commentsData,
  //     }));
  //     return commentsData;
  //   } catch (error) {
  //     console.error(`Error fetching comments for post ${id}:`, error);
  //     return "Error fetching comments";
  //   }
  // };
  return (
    <div className="homePage">
      <Header currentUser={currentUser} />
      <Main
        currentUser={currentUser}
        posts={posts}
        contacts={contacts}
        comments={comments}
      />
      
    </div>
  );
}

export default App;
