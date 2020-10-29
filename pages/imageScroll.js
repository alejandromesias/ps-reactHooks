import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {


    return (
        <div>
            {
                [1, 2, 1, 2, 1, 2].map(
                    (speakerId, index) => {
                        return (
                            <div key={index}>
                                <ImageToggleOnScroll 
                                    primaryImage={`/static/bw/img${speakerId}.png`}
                                    secondaryImage={`/static/color/img${speakerId}.jpg`}/>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export default ImageChangeOnScroll;