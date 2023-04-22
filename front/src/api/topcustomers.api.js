import axios from 'axios'

export const getTopCustomers = () => {
    return axios.get('http://localhost:8000/dvdrental/topcustomers/')
}