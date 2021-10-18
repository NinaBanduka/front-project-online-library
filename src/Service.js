import axios from 'axios'
import StyledBook from './components/StyledBook'

export const getAllUsers = () => axios.get(`https://my-projekat-online-library.herokuapp.com/users`)
export const postUser = (username,email,password) => axios.post(`https://my-projekat-online-library.herokuapp.com/users`,{username,email,password})
export const getAllBooks = () => axios.get(`https://my-projekat-online-library.herokuapp.com/books`)
export const getAllDramas = () => axios.get(`https://my-projekat-online-library.herokuapp.com/books`)

export const getBookByID = (id) => axios.get(`https://my-projekat-online-library.herokuapp.com/books/${id}`)