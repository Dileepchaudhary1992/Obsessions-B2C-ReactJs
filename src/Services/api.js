import axios from 'axios';
export default axios.create({
    baseURL:"https://b2c.obsessionsgroup.com/api",
    headers:{
        "Content-type":"application/json"
    }
})

