import axios from "axios";
const api_local="http://localhost:3000/api/v1"
const api_cloud="https://api-chinua.onrender.com/api/v1/"
const api= axios.create ({
    baseURL:`http://localhost:3000/api/v1`
})

export default api;
