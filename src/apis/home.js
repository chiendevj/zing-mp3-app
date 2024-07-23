import axios from "../axios";

export const apiGetHome = () => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/home',
            method: 'GET',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetTop100 = () => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/top100',
            method: 'GET',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})