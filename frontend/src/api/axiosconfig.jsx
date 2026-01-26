import axios from "axios";

const instance = axios.create({
    baseURL: "https://vensaecommerce.onrender.com/"
})

export default instance;