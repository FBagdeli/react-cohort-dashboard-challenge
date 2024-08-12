import { useParams } from "react-router-dom"

export const PostPage = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <p>You are in post Page</p>
  )
}