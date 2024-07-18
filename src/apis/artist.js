import axios from "../axios";

export const apiGetArtist = (name) => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: '/artist',
            method: 'GET',
            params: {name: name}
        })

        resolve(response)
    } catch (error) {
        reject(error)
    }
})
