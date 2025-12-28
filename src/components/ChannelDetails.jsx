import { Link } from "react-router-dom"
import Post from "./Post"

const posts = [
  {
    title: 'money',
    id: '1',
    body: 'hello',
    image: "/images/boats/ever-given.jpg",
  },
  {
    name: 'studying for final',
    id: '2',
    body: 'hi',
    image: "/images/boats/ever-given.jpg",

  }
]




const ChannelDetails=({post})=>{
  return(
    <>
    <h1>Channel Details</h1>
      {posts.map(post =>(
          <Post post={post} key={post.id}/>
        ))}
      <Link to={"/home"}>
          Back
          </Link>
    </>
  )

}

export default ChannelDetails

