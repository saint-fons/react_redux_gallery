import React from "react";


const Gallery = (props) => {
    return (
        <div className={"Gallery_Container_Element1"}>
            {props.countries.map(i => (
                <img
                    className={"Gallery_Images_Container"}
                    src={i.url}
                    alt={"img"}
                />
            ))}
        </div>
    )
}

export default Gallery