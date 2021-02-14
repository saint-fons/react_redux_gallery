import {createSelector} from "reselect";


export const getGallerySelector = (state) => {
    return (state)
}


export const getGallerySuperSelector = createSelector(getGallerySelector,
    (state) => {
        return state.listImages.gallery
    })



