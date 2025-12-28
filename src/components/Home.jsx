import Channel from "./Channel"
import channels from "../channels"



const Home =({channel})=>{
return(
  <>

  <h1>Home</h1>

  {channels.map(channel =>(
          <Channel channel={channel} key={channel.id}/>
        ))}




  </>
)

}

export default Home
