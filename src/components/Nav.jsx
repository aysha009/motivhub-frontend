import { NavLink, useNavigate } from "react-router-dom"
import { Signout } from "../services/Auth"


const Nav = () => {
  const navigate = useNavigate()
  const handleLogOut = () => {
    Signout()
    navigate("/")
  }
  const isLoggedIn = !!localStorage.getItem("token")

  return (
    <nav className="navbar">
      <h4>MotivHub</h4>
      <div>
        <NavLink to="home">Home</NavLink>
        <> </>
        <NavLink to="channelForm">Add Channel</NavLink>
        <> </>

        {isLoggedIn ? (
          <>
            <NavLink to="profile">My Profile</NavLink>

            <button onClick={handleLogOut} >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/">Sign In</NavLink>
            <> </>
          </>
        )}


      </div>
    </nav >
  )
}

export default Nav
