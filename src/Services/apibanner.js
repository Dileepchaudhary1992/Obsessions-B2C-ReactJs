import axios from 'axios';
export default axios.create({
    baseURL:"https://b2c.obsessionsgroup.com/api/banners?type=",
    headers:{
        "Content-type":"application/json"
    }
})

