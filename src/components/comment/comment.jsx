import { GetCMInitials, GetNames } from "../../utils/functions"
import UserCmInitials from "../buttons/userCmInitials"

const Comment = ({ c, contacts }) => {
  return (
    <li>
      <UserCmInitials c={c} contacts={contacts}/>
      <div>
        <p>
          <span>{GetNames(c.contactId, contacts)}</span>
        </p>
        <p>{c.content}</p>
      </div>
    </li>
  )
}

export default Comment