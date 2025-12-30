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
  const [imageFile, setImageFile] = useState(null)


  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value })
  }

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('channel', newPost.channel)
    formData.append('title', newPost.title)
    formData.append('body', newPost.body)

    if (imageFile) {
      formData.append('image', imageFile)
    }


    try {
      await CreatePost(formData)
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
          type="file"
          name="image/*"
          onChange={handleImageChange}

        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default PostForm