import axios from "axios";

const API = axios.create({
    baseURL:"https://internee-web-api.vercel.app/"
});
export default API;