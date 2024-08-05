import { getInitials } from "../../utils/functions"

const ProfileButton = ({ currentUser }) => {
  return (
    <div>
        <button id="userInitials">{getInitials(currentUser)}</button>
    </div>
  )
}

export default ProfileButton