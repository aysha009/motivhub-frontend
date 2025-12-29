import Client from './api'

export const GetChannels = async () => {
  try {
    const res = await Client.get('/channels')
    return res.data
  } catch (error) {
    throw error
  }
}


export const GetChannelById = async (channelId) => {
  try {
    const res = await Client.get(`/channels/${channelId}`)
    return res.data
  } catch (error) {
    throw error

  }
}

export const CreateChannel = async (data) => {
  try {
    const res = await Client.post('/channels', data)
    return res.data
  } catch (error) {
    throw error
  }
}
