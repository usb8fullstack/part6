import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecs'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (changedObj, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, changedObj)
  return response.data
}

export default { getAll, createNew, update }