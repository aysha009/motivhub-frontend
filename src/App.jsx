import './App.css'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import { Routes, Route } from 'react-router-dom'
import ChannelForm from './components/ChannelForm'
import Home from './components/Home'
import ChannelDetails from './components/ChannelDetails'
import { useState,useEffect } from "react"
import initialChannels from './channels'
import Register from './components/Register.'
import { CheckSession } from './services/Auth'



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

  let emptyChannel = {
    id: "",
    name: "",
    description: ""

  }

   const [channels, setChannels] = useState(initialChannels)
  const [newChannel, setNewChannel] = useState(emptyChannel)

  const addChannel = (e) => {
    e.preventDefault()
    const currentChannels = [...channels]
    const createdChannel = {
      ...newChannel,
      id: parseInt(channels.length + 1)

    }
    currentChannels.push(createdChannel)
    setChannels(currentChannels)
    setNewChannel(emptyChannel)

    return createdChannel.id
  }

  const handleChange = (e) => {
    setNewChannel({ ...newChannel, [e.target.name]: e.target.value })
  }

  return (
    <>
    <header>
        <Nav user={user} handleLogOut={handleLogOut} />
    </header>
    <main>
        <Routes>
          <Route path="/" element={ <SignIn  setUser={setUser}/> } />
          <Route path="/register" element={<Register />} />
          <Route path='channelForm' element={<ChannelForm/>}/>
          <Route path="home" element={ <Home/> } />
          <Route path="channelDetails" element={ <ChannelDetails
          newChannel={newChannel}
          handleChange={handleChange}
          addChannel={addChannel} /> } />



        </Routes>
      </main>

    </>
  )
}

export default App
