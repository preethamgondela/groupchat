import React from 'react'
import "./NavBar.css"
import Logo from '../../../util/Logo.png';
import Settings from './Settings/Settings'
export default function NavBar() {
    return (
        <div className="navbar">
            <div className="left">
                <img src={Logo} width="60px" height="60px" />
                <span className="text">GROUPCHAT</span>
            </div>
            <div className="right">
                {/* <Settings /> */}
            </div>
        </div>
    )
}
