import axios from 'axios'

export const getTopFilms = () => {
    return axios.get('http://localhost:8000/dvdrental/topfilms/')
}