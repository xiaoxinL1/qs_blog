import axios from "@/utils/request.js"


export const getApi = () => {
    return axios({
        url: 'api/getList',
        method: 'GET'
    })
};
export const getByIdApi = (id) => {
    return axios({
        url: `api/getById`,
        method: "GET",
        params: {
            id
        }
    })
}
export const ImageApi = ()=>{
	return axios({
		// "/img/rain-bg2.4b616143.gif"
		url:require('@/static/rain/rain-bg2.gif'),
		method:"GET",
	})
}