import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const NavFoot = () => {
    return (
        <div className="container-fluid text-center nav-foot">
            <ul className="nav-foot">
                <li className="nav-item dropdown list-inline-item">
                    <Dropdown>
                        <Dropdown.Toggle variant="Primary" id="dropdown-basic">
                            Games
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Button>Shop Games</Button>
                            <Button>Sales and deals</Button>
                            <Button>Coming soon</Button>
                            <Button>Online Service</Button>
                            <Button>Mobile Games</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className="nav-item dropdown list-inline-item">
                    <Dropdown>
                        <Dropdown.Toggle variant="Primary" id="dropdown-basic">
                            Hardware
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Button>Nintendo Switch Lineup</Button>
                            <Button>Accessories</Button>
                            <Button>Amiibo</Button>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                <li className="nav-item list-inline-item">
                    <Button variant="Primary" className="nav-item foot-button">
                        News & Events
                    </Button>
                </li>
                <li className="nav-item list-inline-item">
                    <Button variant="Primary" className="nav-item foot-button">
                        Play Nintendo
                    </Button>
                </li>
            </ul>
        </div>
    );
};

export default NavFoot;
