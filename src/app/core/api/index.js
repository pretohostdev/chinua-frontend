import axios from "axios";

const api= axios.create ({
    baseURL:"https://api-chinua.onrender.com/api/v1"
})

export default api;
const api_local="http://localhost:3000/api/v1"
const api_cloud="https://api-chinua.onrender.com/api/v1/"