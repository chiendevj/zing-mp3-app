import axios from "../axios";

export const apiGetHomeChart = () => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/homechart',
            method: 'GET',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetNewReleaseChart = () => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/newreleasechart',
            method: 'GET',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})