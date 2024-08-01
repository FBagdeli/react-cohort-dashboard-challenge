export function getInitials(user = { firstName: "", lastName: "" }) {
  const userName = user.firstName.charAt(0) + user.lastName.charAt(0);
  if (userName === undefined) return "";
  return userName;
}

export const GetNames = (id, contacts) => {
  const user = contacts.find((c) => c.id === id);
  if (user === undefined) return "";
  const userName = user.firstName + " " + user.lastName;
  return userName;
};

export const GetCMInitials = (id, contacts) => {
  const user = contacts.find((c) => c.id === id);
  if (user === undefined) return "";
  const userName = user.firstName.charAt(0) + user.lastName.charAt(0);
  return userName;
};

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
