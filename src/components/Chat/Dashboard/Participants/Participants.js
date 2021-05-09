import React from "react";
import "./Participants.css";
import User from "./User/User";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Participants({ users, room }) {
    return (
        <div className="participantContainer">
            <div className="roomName"> {`${room}'s Room`} </div>
            <ScrollToBottom className="participants">
                {users.map((user, i) => (
                    <div key={i} className="card">
                        <User user={user} />
                    </div>
                ))}
            </ScrollToBottom>
        </div>
    );
}
