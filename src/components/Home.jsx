import Channel from "./Channel"

const channels = [
  {
    name: 'money',
    id: '1',
    description: 'hello'
  },
  {
    name: 'studying for final',
    id: '2',
description: 'hi'
  }
]

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
