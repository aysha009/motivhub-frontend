import { useState } from 'react'
import { CreateChannel } from '../services/ChannelServices'
import { useNavigate } from 'react-router-dom'


const ChannelForm = () => {
  let navigate = useNavigate()

  const emptyChannel = {
    name: "",
    description: ""
  }

  const [newChannel, setNewChannel] = useState(emptyChannel)

  const addChannel = async (e) => {
    e.preventDefault()

    const createdChannel = await CreateChannel(newChannel)
    setNewChannel(emptyChannel)
    return createdChannel

  }

  const handleChange = (e) => {
    setNewChannel({ ...newChannel, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdChannel = await addChannel(e)
    navigate(`/home/${createdChannel._id}`)
  }

  return (
    <div className="channel-page">
      <div className="channel-card">
      <h1>Add New Channel</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newChannel.name}
          onChange={handleChange}
          placeholder="name"
        />

        <textarea
          name="description"
          value={newChannel.description}
          onChange={handleChange}
          placeholder="description"
        />

        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default ChannelForm
