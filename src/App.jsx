import './App.css'
import Nav from './components/Nav'
import SignIn from './components/SignIn'
import { Routes, Route } from 'react-router-dom'
import ChannelForm from './components/ChannelForm'
import Home from './components/Home'


const App = () => {

  return (
    <>
    <header>
      <Nav/>
    </header>
    <main>
        <Routes>
          <Route path="/" element={ <SignIn/> } />
          <Route path='channelForm' element={<ChannelForm/>}/>
          <Route path="home" element={ <Home/> } />



        </Routes>
      </main>

    </>
  )
}

export default App
