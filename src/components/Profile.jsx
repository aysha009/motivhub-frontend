import { useEffect, useState } from 'react'
import { CheckSession } from '../services/Auth'
import { GetMyChannels } from '../services/ChannelServices'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [user, setUser] = useState(null)
  const [channels, setChannels] = useState([])

  useEffect(() => {
    const handleProfile = async () => {
      const session = await CheckSession()
      setUser(session)

      const myChannels = await GetMyChannels()
      setChannels(myChannels)
    }

    handleProfile()
  }, [])

  if (!user) return <p>Please register</p>

  return (
    <>
      <div className="profile">
        <h1>Profile</h1>
           <br></br>
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
        <br></br>
        <br />
        <br />

        <h2>My Channels</h2>
<br></br>
<br />
        <div className="grid col-4">
          {channels.map((channel) => (
            <div className="card" key={channel._id}>
              <Link to={`/home/${channel._id}`}>
                <h4>{channel.name}</h4>
                <p>{channel.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Profile
