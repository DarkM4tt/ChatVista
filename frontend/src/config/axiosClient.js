import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://chatvista-avtg.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
