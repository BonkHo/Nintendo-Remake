import React from "react";

const BodyGameInfo = () => {
    return (
        <div id="game-info" className="game-info">
            <p id="console" className="console">
                Nintendo Switch
            </p>
            <h1 id="game-title" className="game-title">
                Stardew Valley
            </h1>
            <p id="avaliability" className="avaliability">
                Avaliable now
            </p>
            <button>Add to Wish List</button>
            <h2 id="price" className="price">
                $14.99
            </h2>
            <button>Buy Digital</button>
        </div>
    );
};

export default BodyGameInfo;
