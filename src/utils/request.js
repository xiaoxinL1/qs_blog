import axios from "axios";

axios.create({
    baseURL: '',
    timeout: 5000
})
export default ({ url, method = "GET", params = {}, data = {}, headers = {} }) => {
    return axios({
        url,
        method,
        params,
        data,
        headers
    })
}