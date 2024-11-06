import axios from "axios"

export const api = axios.create({
    baseURL: 'https://swiss-wallet-backend.onrender.com/api'
})