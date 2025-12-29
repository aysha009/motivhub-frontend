import { useState } from 'react'
import { CreatePost } from '../services/PostServices'
import { useNavigate, useParams } from 'react-router-dom'
import '../styles/post.css'

const PostForm = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const emptyPost = {
    channel: id,
    title: '',
    body: '',
    image: ''
  }

  const [newPost, setNewPost] = useState(emptyPost)

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await CreatePost(newPost)
      setNewPost(emptyPost)
      navigate(`/channel/${id}`)
    } catch (error) {
      throw error
    }
  }

  return (
  <div className="post-form-container">
      <h1>Add New Post</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleChange}
          placeholder="Post Title"
          required
        />

        <textarea
          name="body"
          value={newPost.body}
          onChange={handleChange}
          placeholder="Post Body"
        />

        <input
          type="text"
          name="image"
          value={newPost.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostForm