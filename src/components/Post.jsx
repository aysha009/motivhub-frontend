import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { GetPostsByChannel } from "../services/PostServices"
import '../styles/post.css'

const Post = ({ post }) => {
  let { id } = useParams();
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await GetPostsByChannel(id)
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div className="post">
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Post
