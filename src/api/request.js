import axios from 'axios'
import { BASE_URL } from './baseURL'

export const getAllJobs = async () => {
    let response;
    await axios.get(`${BASE_URL}/`)
        .then((res) => {
            response = res.data
        })
    return response
}
