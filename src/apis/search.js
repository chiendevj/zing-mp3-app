import axios from "../axios";

export const apiGetRecommendKeyword = () => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/recommend_keyword',
            method: 'GET',
        })

        resolve(response)
    } catch (error) {
        reject(error)
    }
})

export const apiGetSearchAll = (keyword) => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/search',
            method: 'GET',
            params: {keyword: keyword}
        })

        resolve(response)
    } catch (error) {
        reject(error)
    }
})

