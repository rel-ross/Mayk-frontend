import React from 'react'

import logo from '../../../Assets/mayk-white-logo.png'

import './HeaderNavigation.css'

export default function HeaderNavigation() {
    return (
        <div className="header-navigation">
            <img className="logo" src={logo} alt="mayk logo" />
            <h3>Projects |
            Activity |
            Lending Library
            </h3>
        </div>
    )
}
