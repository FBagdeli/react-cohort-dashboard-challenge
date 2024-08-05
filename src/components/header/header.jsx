import Logo from "../logo/logo";
import ProfileButton from "../buttons/profileButton";

const Header = ({ currentUser }) => {

  return (
    <header>
      <Logo/>
      <ProfileButton currentUser = { currentUser }/>
    </header>
  );
};

export default Header;
