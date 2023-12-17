const SERVER_PATH = process.env.VUE_APP_BASE_URL || 'http://localhost:5200';
let api = axios.create({baseURL:SERVER_PATH})
export default api