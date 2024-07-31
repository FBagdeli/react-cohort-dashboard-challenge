export function getInitials(user = { firstName: "", lastName: "" }) {
  const userName = user.firstName.charAt(0) + user.lastName.charAt(0);
  if (userName === undefined) return "";
  return userName;
}