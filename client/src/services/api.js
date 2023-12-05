import { SERVER_PATH } from "../../config.js"
let api = axios.create({baseURL:SERVER_PATH})
export default api