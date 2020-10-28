import React, {useRef, useState, useEffect} from "react";

const ImageToggleOnScroll = ({primaryImage, secondaryImage}) => {
    
    const imageRef = useRef(null);

    const isInview = () => {
        const rectangle = imageRef.current.getBoundingClientRect();
        return rectangle.top >= 0 && rectangle.bottom <= window.innerHeight;
    };
    const [inView, setInView] = useState(false); 

    useEffect(() => {
        scrollHandler();
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    },[]);
    
    const scrollHandler = () => {
        setInView(isInview());
    };

    return (
        <img 
            src={inView ? secondaryImage : primaryImage}
            ref={imageRef}
        />
    );
};

export default ImageToggleOnScroll;