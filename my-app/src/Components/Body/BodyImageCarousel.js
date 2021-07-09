import React from "react";

const BodyImageCarousel = () => {
    return (
        <div className="image-carousal-div carousel slide">
            <div className="carousel-item-active">
                <img
                    src="https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot01?v=2021070707"
                    alt="image1"
                    className="d-block mx-auto w-50"
                />
            </div>
        </div>
    );
};

export default BodyImageCarousel;
