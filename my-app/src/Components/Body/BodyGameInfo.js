import React from "react";

const BodyGameInfo = (props) => {
    return (
        <div id="game-info" className="game-info-container">
            <div className="game-info">
                <p id="console" className="console">
                    {props.console}
                </p>
                <h1 id="game-title" className="game-title">
                    {props.title}
                </h1>
                <p id="avaliability" className="avaliability">
                    {props.avaliability}
                </p>
                <div className="wish-list-container">
                    <button className="wish-list">Add to Wish List</button>
                </div>
                <div className="price-purchase-container">
                    <h2 id="price" className="price">
                        ${props.price}
                    </h2>
                    <button className="purchase-button styled-button">
                        Buy Digital
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BodyGameInfo;
