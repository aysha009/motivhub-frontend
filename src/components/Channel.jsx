import { Link } from "react-router-dom"

const channel = [
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


const Channel =({channel})=>{
  return(
    <>
    <div className="channel-grid">
      {
      channel.map((channel) => (
        <div className="channel-card" key={channel.id}>

          <h3>{channel.name}</h3>
          <h3>Description:{channel.description}</h3>
        </div>
      ))}
    </div>
      <Link to={"home"}>
          Back
          </Link>
    </>


  )

}

export default Channel

