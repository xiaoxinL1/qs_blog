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
		url:"https://picsum.photos/200",
		method:"GET",
	})
}