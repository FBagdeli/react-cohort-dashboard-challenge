import { GetNames } from "../../../utils/functions"
import ProfileButton from "../../buttons/profileButton"

const TitleSection = ({post, contactPost, contacts}) => {
  return (
        <div className="section-title">
          <ProfileButton currentUser={contactPost} />
          <div>
            <p id="title">{GetNames(post, contacts)}</p>
            <p>
              <span>{post.title}</span>
            </p>
          </div>
        </div>
  )
}

export default TitleSection