import React from 'react'
import {connect} from "react-redux";
import {getGallerySuperSelector} from "../Redux/GallerySelector";
import Gallery from "./Gallery";
import {getGallery} from "../Redux/GalleryReducer";


class CountryContainer extends React.Component {
    componentDidMount() {
        this.props.getGallery()
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
