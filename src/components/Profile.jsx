import { useEffect, useState } from 'react'
import { CheckSession } from '../services/Auth'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const User = async () => {
      const session = await CheckSession()
      setUser(session)
    }
    User()
  }, [])

  if (!user)
     return <p>Please register</p>

  return (
    <>
      <div className="profile">
        <h1>Profile</h1>
        <h3>Name: {user.name}</h3>
        <h5>Email: {user.email}</h5>
      </div>
    </>
  )
}

export default Profile
