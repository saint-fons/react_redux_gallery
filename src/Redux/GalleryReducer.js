import {GalleryAPI as CountriesAPI} from "../API/API";

const SET_GALLERY = 'SET-GALLERY'
const ADD_IMAGE = 'ADD-IMAGE'
const UPDATE_IMAGE = 'UPDATE-IMAGE'

let initialState = {
    galleryImages: [{
    }],
    updateImageUrl: ""
}

const galleryReducer = (state = initialState, action) => {
    let stateCopy
    switch (action.type) {
        case SET_GALLERY:
            return {
                ...state,
                ...action.images
            }
        case ADD_IMAGE: {
            let newImage = {
                image: state.updateImageUrl
            }
            stateCopy = {...state}
            stateCopy.galleryImages = [...state.galleryImages]
            stateCopy.galleryImages.push(newImage)
            stateCopy.updateImageUrl = ""
            return stateCopy
        }
        case UPDATE_IMAGE: {
            stateCopy = {...state}
            stateCopy.updateImageUrl = action.updateUrl
            return stateCopy
        }
        default:
            return state
    }
}

export const setGallery = (images) =>
    ({type: SET_GALLERY, images})

export const addImage = () =>
    ({type: ADD_IMAGE})

export const updateImageUrl = (text) =>
    ({type: UPDATE_IMAGE, updateUrl: text})


export const getGallery = () => {
    return (dispatch) => {
        CountriesAPI.getGallery()
            .then(response => {
                dispatch(setGallery(response))
            })
    }
}

export default galleryReducer