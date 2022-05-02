import axios from 'axios'

export  const instance = axios.create({
    baseURL: process.env.REACT_APP_APIS_SOCIAL,
    headers: {
        'Content-Type': 'application/json',
    }
  });

export default instance;