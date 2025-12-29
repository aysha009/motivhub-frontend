import Client from './api'

export const GetComments = async () => {
  try {
    const res = await Client.get('/comments')
    return res.data
  } catch (error) {
    throw error
  }
}


export const GetCommentsByPost = async (postId) => {
  try {
    const res = await Client.get(`/comments/post/${postId}`)
    return res.data
  } catch (error) {
    throw error

  }
}

export const CreateComment = async (commentId) => {
  try {
    const res = await Client.post('/comments', commentId)
    return res.data
  } catch (error) {
    throw error
  }
}
