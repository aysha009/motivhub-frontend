import { useEffect, useState } from "react"
import { GetPostById } from "../services/PostServices"
import { GetCommentsByPost, CreateComment } from "../services/CommentServices"
import { useParams } from "react-router-dom"

const PostDetails = () => {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  const emptyComment = {
    post: id,
    content: ""
  }

  const [newComment, setNewComment] = useState(emptyComment)

  useEffect(() => {
    if (!id) return

    const handlePost = async () => {
      const postData = await GetPostById(id)
      setPost(postData)

      const commentData = await GetCommentsByPost(id)
      setComments(commentData)
    }

    handlePost()
  }, [id])

  const handleChange = (e) => {
    setNewComment({ ...newComment, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const createdComment = await CreateComment(newComment)
      setNewComment(emptyComment)
      setComments([...comments, createdComment])

    } catch (error) {
      throw error
    }

  }

  return (
    <div className="postDetails">
      <h1>{post && post.title}</h1>

      <div className="post">
        <h3>Description: {post && post.body}</h3>
      </div>

      <div className="comment" >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="content"
            value={newComment.content}
            onChange={handleChange}
            placeholder="Write a comment"
            required
          />
          <button type="submit">Submit</button>
        </form>

        {comments.map((comment) => (
          <div className="card" key={comment._id}>
            <h2>{comment.content}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostDetails
