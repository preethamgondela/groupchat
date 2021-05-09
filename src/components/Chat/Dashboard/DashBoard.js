import React from "react";
import Chats from "./Chats/Chats";
import "./DashBoard.css";
import Participants from "./Participants/Participants";
import RoomList from "./RoomList/RoomList";

export default function DashBoard(props) {
    console.log('from dashboard');
    console.log(props);
    return (
        <div className="container">
            {/* <RoomList /> */}

            <Chats
                messages={props.messages}
                name={props.name}
                message={props.message}
                sendMessage={props.sendMessage}
                setMessage={props.setMessage}
            />
            <Participants users={props.users} room={props.room} />

        </div>
    );
}
