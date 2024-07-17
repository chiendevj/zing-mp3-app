import axios from "../axios";

export const apiGetHub = () => new Promise( async (resolve, reject) => {
    try {
        const response = await axios({
            url: 'https://zingmp3.vn/api/v2/page/get/hub-home?ctime=1721222002&version=1.10.36&sig=ea3d95c2629044880397c8fba62724e4c555dfe00f565d21cb1d14fc147cf9a52249f6943c471e3584a353d26a32e33f774e210c55c17abd85001e00c2862256&apiKey=X5BM3w8N7MKozC0B85o4KMlzLZKhV00y',
            method: 'GET',
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})