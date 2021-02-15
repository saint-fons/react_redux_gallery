import {GalleryAPI as CountriesAPI} from "../API/API";

const SET_GALLERY = 'SET-GALLERY'

let initialState = {
    galleryImages: [{
    }],
}

const galleryReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case SET_GALLERY:
            return {
                ...state,
                ...action.images
            }
        default:
            return state
    }
}

export const setGallery = (images) =>
    ({type: SET_GALLERY, images})


export const getGallery = () => {
    return (dispatch) => {
        CountriesAPI.getGallery()
            .then(response => {
                dispatch(setGallery(response))
            })
    }
}


export default galleryReducer