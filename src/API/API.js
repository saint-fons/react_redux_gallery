import axios from 'axios';

export const GalleryAPI = {
    getGallery() {
        return axios.get(`gallery1.json`)
            .then(response => {
                return response.data
            })
    }
}



