import axios from 'axios';

export const GalleryAPI = {
    getGallery() {
        return axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(response => {
                return response.data
            })
    }
}



