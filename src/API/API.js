import axios from 'axios';

export const GalleryAPI = {
    getGallery() {
        return axios.get(`https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json`)
            .then(response => {
                return response.data
            })
    }
}



