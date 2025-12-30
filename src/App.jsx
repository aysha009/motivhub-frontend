import './styles/home.css'
import './styles/channel.css'
import './styles/profile.css'
import './styles/post.css'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import { Routes, Route, Router } from 'react-router-dom'
import ChannelForm from './components/ChannelForm'
import Home from './components/Home'
import ChannelDetails from './components/ChannelDetails'
import { useState, useEffect } from "react"
import Register from './components/Register.'
import { CheckSession } from './services/Auth'
import Profile from './components/Profile'
import PostDetails from './components/PostDetails'
import PostForm from './components/PostForm'




const App = () => {

  const [user, setUser] = useState(null)


  const handleLogOut = () => {
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
          <Route path="profile" element={<Profile />} />


          <Route path="home" element={<Home />} />

       
          <Route path="/home/:id" element={<ChannelDetails />} />

     
          <Route path='/channelForm' element={<ChannelForm />} />


         
          <Route path='/postForm/:id' element={<PostForm />} />

      
          <Route path="/channel/:id" element={<ChannelDetails />} />

          <Route path="/postDetails/:id" element={<PostDetails />} />











        </Routes>
      </main>

    </>
  )
}

export default App
