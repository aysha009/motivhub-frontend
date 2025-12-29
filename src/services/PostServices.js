import Client from './api'


export const GetPostsByChannel = async (channelId) => {
  try {
    const res = await Client.get(`/posts/channel/${channelId}`)
    return res.data
  } catch (error) {
    throw error
  }
}


export const CreatePost = async (postId) => {
  try {
    const res = await Client.post('/posts', postId)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPostById = async (postId) => {
  try {
    const res = await Client.get(`/posts/${postId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
