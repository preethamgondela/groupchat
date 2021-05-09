import React from 'react'
import './User.css'

export default function User({ user }) {
    return (
        <div className="userCard">
            {user.name}
        </div>
    )
}
