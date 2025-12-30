import { useEffect, useState } from "react"
import { GetPostsByChannel } from "../services/PostServices"
import { GetChannelById } from "../services/ChannelServices"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import '../styles/post.css'




const ChannelDetails = () => {
  const { id } = useParams()
  const [channel, setChannel] = useState(null)
  const [posts, setPosts] = useState([])


  useEffect(() => {
    if (!id) return

    const handlePosts = async () => {
      const channeldata = await GetChannelById(id)
      setChannel(channeldata)

      const data = await GetPostsByChannel(id)
      setPosts(data)
    }

    handlePosts()

  }, [id])

  return (
    <>

      <div className="channelDetails">
    <div className="channel-header">
      <h1>{channel && channel.name}</h1>

      <Link to={`/postForm/${id}`} className="add-post-btn">
        + Add New Post
      </Link>
    </div>


    <div className="post">
      {posts.map((post) => (
        <div className="card" key={post._id}>
          <Link to={`/postDetails/${post._id}`}>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
          </Link>

            </div>
          ))}


        </div>

      </div>

    </>
  )

}

export default ChannelDetails
