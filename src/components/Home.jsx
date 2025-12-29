import { useEffect, useState } from "react"
import { GetChannels } from "../services/ChannelServices"
import { Link } from "react-router-dom"




const Home = ({ }) => {


  const [channels, setChannels] = useState([])


  useEffect(() => {
    const handleChannels = async () => {
      const data = await GetChannels()
      setChannels(data)
    }
    handleChannels()
  }, [])

  return (
    <>
      <div className="home">

        <br /><br />


        <div className="grid col-4">
          {channels.map((channel) => (
            <div className="card" key={channel._id}>
              <Link to={`/home/${channel._id}`}>
                <h2>{channel.name}</h2>
                <h3>{channel.description}</h3>
              </Link>
            </div>

          ))}
        </div>




      </div >
    </>
  )

}

export default Home
