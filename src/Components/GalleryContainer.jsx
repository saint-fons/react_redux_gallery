import React from 'react'
import {connect} from "react-redux";
import {getGallerySuperSelector} from "../Redux/GallerySelector";
import {getGallery} from "../Redux/GalleryReducer";
import Gallery from "./Gallery";


class CountryContainer extends React.Component {
    componentDidMount() {
        getGallery()
    }

    render() {
        return <>
            <Gallery
                countries={this.props.gallery}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        gallery: getGallerySuperSelector(state)
    }
}



export default  connect((mapStateToProps),
    {getGallery})(CountryContainer)
