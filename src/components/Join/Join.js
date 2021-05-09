import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../util/Logo.png'
import "./Join.css";

export default function Join() {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="logo">
                    <img src={Logo} alt="logo" height="130px" height="130px" />
                </div>
                <p className="heading">GROUP CHAT</p>
                <div>
                    <input
                        placeholder="Enter Your Name"
                        className="joinInput"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <input
                        placeholder="Enter the room name"
                        className="joinInput"
                        type="text"
                        onChange={(event) => setRoom(event.target.value)}
                    />
                </div>
                <Link
                    onClick={(event) => (!name || !room ? event.preventDefault() : null)}
                    to={`/chat?name=${name}&room=${room}`}
                >
                    <button className="button" type="submit">
                        Login
          </button>
                </Link>
            </div>
        </div>
    );
}
