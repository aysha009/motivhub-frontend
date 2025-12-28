import { useNavigate } from "react-router-dom"

const ChannelForm =({addChannel, newChannel, handelChange})=>{

   let navigate = useNavigate()

  const handleSubmit = (e) => {
    let id =  addBoat(e)
    navigate(`/home/${id}`)

  }

  const channel = {...newChannel}

  return(
    <div>
    <h1>Add New Channel</h1>

    <form onSubmit={ handleSubmit }>
      <input type="text" value={channel.name} onChange={handelChange} name={'name'} placeholder={'name'} />
      <input type="text-area" value={channel.description} onChange={handelChange} name={'description'} placeholder={'description'} />
      <button>Submit</button>
    </form>
    </div>
    
  )

}

export default ChannelForm
