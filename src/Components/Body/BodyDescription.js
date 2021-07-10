import React from "react";

export default function BodyDescription(props) {
    return (
        <div className="body-description">
            <h1>{props.descriptionTitle}</h1>
            <p>{props.descriptionBody}</p>
            <button className="styled-button">
                Explore this game's official site &gt;
            </button>
        </div>
    );
}
