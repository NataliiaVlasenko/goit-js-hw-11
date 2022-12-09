//31948719-b1b8a7b96f20b88acc6eb2f9f


import axios from 'axios';
export { fetchImg };

const BASE_URL = 'https://pixabay.com/api/'; 
const KEY = '31948719-b1b8a7b96f20b88acc6eb2f9f';
    
async function fetchImg(query, page, perPage) {
    try {
        const response = await axios.get(
        `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
        );
        // console.log(response.data)
        return response;
        
    }
    catch (error) {
        console.log(error);
    }
}