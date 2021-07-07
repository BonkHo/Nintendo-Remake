import React from "react";

const BodyTechInfo = () => {
    return (
        <div className="tech">
            <div id="release-date">Release date: October 05, 2017</div>
            <div id="players">Players: up to 4 players</div>
            <div id="genre">Genre: Indie, Simulation, Role-Playing</div>
            <div id="publisher">Publisher: ConcernedApe</div>
            <div id="developer">Developer: ConcernedApe</div>
            <div id="game-file-size">Game file size: 1.5 GB</div>
            <div id="supported-languages">
                Supported Langugaes: Japanese, French, German, Italian, Spanish,
                Korean, Portuguese, Russian, Chinese, English
            </div>
            <div id="supported-play">
                TV mode Tabletop Mode Handheld Mode Software compatibility and
                play experience may differ on Nintendo Switch Lite. Additional
                accessories may be required (sold separately). See support for
                details.
            </div>
            <div id="esrb-rating">
                Simulated Gambling, Use of Alcohol, Fantasy Violence, Use of
                Tobacco, Mild Blood, Mild Language Users Interact
            </div>
            <div id="online">
                <img
                    src="https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/global/logos/logo-nso.svg"
                    alt="online"
                />
                <p>
                    Play online, access classic Super NES™ games, and more with
                    a Nintendo Switch Online membership.
                </p>
                <button>Learn More &gt;</button>
                <p>This game supports:</p>
                <button>Online Play</button>
                <button>Save Data Cloud</button>
            </div>
        </div>
    );
};

export default BodyTechInfo;
