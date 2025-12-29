import './styles/home.css'
import './styles/channel.css'
import './styles/profile.css'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import { Routes, Route } from 'react-router-dom'
import ChannelForm from './components/ChannelForm'
import Home from './components/Home'
import ChannelDetails from './components/ChannelDetails'
import { useState, useEffect } from "react"
import initialChannels from './channels'
import Register from './components/Register.'
import { CheckSession } from './services/Auth'
import Profile from './components/Profile'
import PostDetails from './components/PostDetails'
import posts from './posts'




const App = () => {

  const [user, setUser] = useState(null)


  const handleLogOut = () => {
    // Resets all auth related state and clears localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const userData = await CheckSession()
    setUser(userData)

  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      checkToken()
    }
  }, [])


  return (
    <>
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<SignIn setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path='channelForm' element={<ChannelForm />} />
          <Route path="home" element={<Home />} />
          <Route path="/home/:id" element={<ChannelDetails />} />
          <Route path="profile" element={<Profile />} />

          <Route path="channelDetails" element={<ChannelDetails/>} />


          <Route path="/channelDetails/:id" element={<PostDetails posts={posts} />} />



        </Routes>
      </main>

    </>
  )
}

export default App
