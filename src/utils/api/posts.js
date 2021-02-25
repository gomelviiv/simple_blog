import { axios } from 'core'

export default {
    get: id => axios.get(`/posts${id ? '/' + id : ''}`),
    remove: id => axios.delete(`/posts/${id}`),
    post: data => axios.post(`/posts`, {data}),
    put: (id,data) => axios.put(`/posts/${id}`, {data})
}