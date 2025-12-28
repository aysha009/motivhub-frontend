import { Link } from "react-router-dom"


const Post =({post})=>{
  return(
    <>
    <div className="channel" key={post.id}>

          <h3>{post.title}</h3>
          <h5>{post.body}</h5>
          <h3>{post.image}</h3>
    </div>
          
    </>


  )

}

export default Post

