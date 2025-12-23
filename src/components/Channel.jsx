import { Link } from "react-router-dom"


const Channel =({channel})=>{
  return(
    <>
    <div className="channel" key={channel.id}>

          <h3>{channel.name}</h3>
          <h3>Description:{channel.description}</h3>
    </div>
      <Link to={"/channelDetails"}>
          View

          </Link>
    </>


  )

}

export default Channel

