import axios from "../axios";

export const apiGetHubHome = () => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/hub-home',
            method: 'GET',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetHubDetail = (id) => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/hub-detail',
            method: 'GET',
            params: { id: id }
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})