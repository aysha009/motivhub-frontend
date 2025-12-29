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

export const UpdateComment = async (commentId, updatedData) => {
  try {
    const res = await Client.put(`/comments/${commentId}`, updatedData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteComment = async (commentId) => {
  try {
    const res = await Client.delete(`/comments/${commentId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

