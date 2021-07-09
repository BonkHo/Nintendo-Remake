import React from "react";
import BodyImage from "./BodyImage";
import BodyGameInfo from "./BodyGameInfo";
import BodyImageCarousel from "./BodyImageCarousel";
import BodyDescription from "./BodyDescription";
import BodyTechInfo from "./BodyTechInfo";
import BodyData from "./BodyData";

function createBodyGameInfo(data) {
    return (
        <BodyGameInfo
            id={data.id}
            console={data.console}
            title={data.title}
            avaliability={data.avaliability}
            price={data.price}
            descriptionTitle={data.descriptionTitle}
            descriptionBody={data.descriptionBody}
            releaseDate={data.releaseDate}
            players={data.players}
            genre={data.genre}
            publisher={data.publisher}
            developer={data.developer}
            gameFileSize={data.gameFileSize}
            languages={data.languages}
        />
    );
}

function createBodyDescription(data) {
    return (
        <BodyDescription
            descriptionTitle={data.descriptionTitle}
            descriptionBody={data.descriptionBody}
        />
    );
}

const Body = () => {
    return (
        <div>
            <BodyImage />
            {BodyData.map(createBodyGameInfo)}
            <BodyImageCarousel />
            {BodyData.map(createBodyDescription)}
            <BodyTechInfo />
        </div>
    );
};

export default Body;
