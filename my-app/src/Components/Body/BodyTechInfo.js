import React from "react";

const BodyTechInfo = (props) => {
    return (
        <div className="body-tech-info">
            <div className="tech-boxes">
                <div id="release-date">
                    <span>
                        <dt>Release date:</dt>
                    </span>{" "}
                    <div>{props.releaseDate}</div>
                </div>
                <div id="players">
                    <span>
                        <dt>Players:</dt>
                    </span>{" "}
                    <div>{props.players}</div>
                </div>
                <div id="genre">
                    <span>
                        <dt>Genre:</dt>
                    </span>
                    <div>{props.genre}</div>
                </div>
                <div id="publisher">
                    <span>
                        <dt>Publisher:</dt>
                    </span>
                    <div>{props.publisher}</div>
                </div>
                <div id="developer">
                    <span>
                        <dt>Developer:</dt>
                    </span>
                    <div>{props.developer}</div>
                </div>
                <div id="game-file-size">
                    <span>
                        <dt>Game file size:</dt>
                    </span>
                    <div> {props.gameFileSize}</div>
                </div>
                <div id="supported-languages">
                    <span>
                        <dt>Supported Languages:</dt>
                    </span>
                    <div>{props.languages}</div>
                </div>
            </div>
            <div>
                <div id="supported-play">
                    TV mode Tabletop Mode Handheld Mode Software compatibility
                    and play experience may differ on Nintendo Switch Lite.
                    Additional accessories may be required (sold separately).
                    See support for details.
                </div>
                <div id="esrb-rating">
                    Simulated Gambling, Use of Alcohol, Fantasy Violence, Use of
                    Tobacco, Mild Blood, Mild Language Users Interact
                </div>
            </div>
            <div>
                <div id="online" className="online">
                    <div className="logo">
                        <img
                            src="https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/global/logos/logo-nso.svg"
                            alt="online"
                        />
                    </div>
                    <div className="description">
                        <p>
                            Play online, access classic Super NES™ games, and
                            more with a Nintendo Switch Online membership.
                        </p>
                    </div>
                    <div className="learnmore">
                        <button>Learn More &gt;</button>
                    </div>
                    <div className="label">
                        <p>This game supports:</p>
                    </div>
                    <div className="buttons">
                        <button className="styled-button">Online Play</button>
                        <button className="styled-button">
                            Save Data Cloud
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyTechInfo;
