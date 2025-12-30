import { useEffect, useState } from "react"
import { GetPostById } from "../services/PostServices"
import {
  GetCommentsByPost,
  CreateComment,
  UpdateComment,
  DeleteComment,
} from "../services/CommentServices"
import { useParams } from "react-router-dom"
import '../styles/post.css'

const PostDetails = () => {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editContent, setEditContent] = useState("")

  const emptyComment = {
    post: id,
    content: "",
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

  const startEdit = (comment) => {
    setEditingId(comment._id)
    setEditContent(comment.content)
  }

  const handleUpdate = async (id) => {
    const updatedComment = await UpdateComment(id, { content: editContent })
    setComments(
      comments.map((comment) => (comment._id === id ? updatedComment : comment))
    )
    setEditingId(null)
    setEditContent("")
  }

  const handleDelete = async (id) => {
    await DeleteComment(id)
    setComments(comments.filter((comment) => comment._id !== id))
  }

  return (
<div className="postDetails">
      <h1>{post && post.title}</h1>
      
       
      {post?.image && (
        <img
        className="post-image"
          src={`http://localhost:3000${post.image}`}
          alt="post"
        />
      )}



      <div className="post">
        <h3>Description: {post && post.body}</h3>
      </div>
      

      <div className="comment">
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
            {editingId === comment._id ? (
              <>
              <div className="button-group">
                <input
                  type="text"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <button onClick={() => handleUpdate(comment._id)}>
                  Update
                </button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
                 </div>
              </>
            ) : (
             
              <>
              <div className="button-group">
                <h2>{comment.content}</h2>
                <button onClick={() => startEdit(comment)}>Edit</button>
                <button onClick={() => handleDelete(comment._id)}>
                  Delete
                </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostDetails
