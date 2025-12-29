import { useEffect, useState } from "react"
import { GetPostsByChannel } from "../services/PostServices"
import { GetChannelById } from "../services/ChannelServices"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"




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
        <button>
          <Link to={`/postForm/${id}`}>
            Add new Post
          </Link>
        </button>
        <h1>{channel && channel.name}</h1>
        <h2>Posts in this Channel</h2>


        <div className="grid col-4">
          {posts.map((post) => (
            <div className="card" key={post._id}>
              <Link to={`/postDetails/${post._id}`}>
                {/* image */}
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
