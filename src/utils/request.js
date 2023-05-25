import axios from "axios";

axios.create({
    baseURL: '',
    timeout: 5000
})
export default ({ url, method, params = {}, data = {}, headers = {} }) => {
    return axios({
        url,
        method,
        params,
        data,
        headers
    })
}