import axios from 'axios'


export const getInventory = () => {
    return axios.get('http://localhost:8000/dvdrental/inventory/');
};

export const getInventoryId = (inventory_id) => {
    return axios.get('http://localhost:8000/dvdrental/inventory/' + inventory_id + '/');
};

export const createInventory = (item) => {
    return axios.post('http://localhost:8000/dvdrental/inventory/', item);
};


export const deleteInventory = (inventory_id) => {
    return axios.delete('http://localhost:8000/dvdrental/inventory/' + inventory_id + '/')
};

export const updateInventory = (inventory_id, item) => {
    return axios.put('http://localhost:8000/dvdrental/inventory/' + inventory_id, item)
};



