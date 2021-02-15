import React from 'react'
import {connect} from "react-redux";
import {getGallerySuperSelector} from "../Redux/GallerySelector";
import Gallery from "./Gallery";
import {addImage, getGallery, updateImageUrl} from "../Redux/GalleryReducer";
import "./../style/style.scss"


class CountryContainer extends React.Component {
    componentDidMount() {
        this.props.getGallery()
    }

    render() {
        return <>
            <div className={"Gallery_Container"}>
                <Gallery
                    countries={this.props.gallery}
                    addImage={this.props.addImage}
                    updateImageUrl={this.props.updateImageUrl}
                />
            </div>
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        gallery: getGallerySuperSelector(state)
    }
}


export default connect((mapStateToProps),
    {getGallery, addImage, updateImageUrl})(CountryContainer)
