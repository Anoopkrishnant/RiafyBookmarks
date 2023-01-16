import axios from "axios"
const API = axios.create({baseURL: "http://localhost:5000"})

export const createBookmark = API.post('/create')
export const getBookmark = API.get('/')