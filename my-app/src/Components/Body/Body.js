import React from "react";
import BodyImage from "./BodyImage";
import BodyGameInfo from "./BodyGameInfo";
import BodyImageCarousel from "./BodyImageCarousel";
import BodyDescription from "./BodyDescription";
import BodyTechInfo from "./BodyTechInfo";

const Body = () => {
    return (
        <div>
            <BodyImage />
            <BodyGameInfo />
            <BodyImageCarousel />
            <BodyDescription />
            <BodyTechInfo />
        </div>
    );
};

export default Body;
