import React from "react";

const NavHead = () => {
    return (
        <div className="navbar container-fluid">
            <div className="button-left">
                <button>Nintendo</button>
                <button id="search" className="header-button search-bar">
                    Search games, systems, support etc.
                </button>
            </div>
            <div className="button-right">
                <button className="header-button">Support</button>
                <button className="header-button">Wish List</button>
                <button className="header-button">Log In / Sign Up</button>
            </div>
        </div>
    );
};

export default NavHead;
