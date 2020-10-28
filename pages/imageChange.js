import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver 
            primaryImage="/static/bw/img1.png"
            secondaryImage="/static/bw/img3.jpg"/>
            &nbsp;
            <ImageToggleOnMouseOver 
            primaryImage="/static/bw/img2.png"
            secondaryImage="/static/bw/img4.jpg"/>
        </div>    
    );
};

export default ImageChangeOnMouseOver;