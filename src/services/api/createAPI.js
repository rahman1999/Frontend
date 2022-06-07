import axios from "../axios/axios"

export const axiosapi = async (api) => {
    const response = await axios({
        method:api.method,
        url:api.url,
        data:api.data,
        headers: api.headers
    })
    return response;
} 