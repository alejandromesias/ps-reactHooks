import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
    return (
        <>
        <div>
            <ImageToggleOnScroll 
            primaryImage="/static/bw/img1.png"
            secondaryImage="/static/bw/img3.jpg"/>
        </div>
        <div>
            <ImageToggleOnScroll 
            primaryImage="/static/bw/img2.png"
            secondaryImage="/static/bw/img4.jpg"/>
        </div>
        <div>
            <ImageToggleOnScroll 
            primaryImage="/static/bw/img1.png"
            secondaryImage="/static/bw/img3.jpg"/>
        </div>
        <div>
            <ImageToggleOnScroll 
            primaryImage="/static/bw/img2.png"
            secondaryImage="/static/bw/img4.jpg"/>
        </div>
        </>    
    );
};

export default ImageChangeOnScroll;