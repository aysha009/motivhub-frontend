import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>MotivHub</h4>
      <div>
        <NavLink to="home">Home</NavLink>
        <> </>
        <NavLink to="channelForm">Add Channel</NavLink>
      </div>
    </nav>
  )
}

export default Nav
