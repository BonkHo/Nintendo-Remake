import React from "react";

const NavFoot = () => {
    return (
        <div className="container-fluid text-center nav-foot">
            <ul className="nav-foot">
                <li className="nav-item dropdown list-inline-item">
                    <button id="games" className="nav-item foot-button">
                        Games
                    </button>
                </li>
                <li className="nav-item dropdown list-inline-item">
                    <button id="hardware" className="nav-item foot-button">
                        Hardware
                    </button>
                </li>
                <li className="nav-item list-inline-item">
                    <button className="nav-item foot-button">
                        News & Events
                    </button>
                </li>
                <li className="nav-item list-inline-item">
                    <button className="nav-item foot-button">
                        Play Nintendo
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default NavFoot;
