import React from "react";
import './Settings.css'
import Image from '../../../../util/Logo.png'
import { useState } from 'react'

export default function Settings() {
    const [active, setActive] = useState(false);

    function showCard(event) {
        // event.preventDefalut();

        setActive(!active);
    }

    return (
        <div className="profile">
            <div className="pic" onClick={showCard}>
                {
                    active ? <Card /> : null
                }
            </div>
        </div>
    )
}

function Card() {
    return (
        <div className="profileCard">
            <div className="avatarContainer">
                <img src={Image} />
                <span>Edit</span>
            </div>
            <div className="name">
                Random Name
            </div>
        </div>
    );
}