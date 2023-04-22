import axios from 'axios'

export const getInventory = () => {
    return axios.get('http://localhost:8000/dvdrental/inventory/')
}
