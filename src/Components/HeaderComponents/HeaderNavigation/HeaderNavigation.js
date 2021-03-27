import React from 'react'
import { Route, Link, Switch, Redirect } from 'react-router-dom'

import logo from '../../../Assets/mayk-white-logo.png'

import './HeaderNavigation.css'

export default function HeaderNavigation() {
    return (
        <div className="header-navigation">
            <Link to="/"><img className="logo" src={logo} alt="mayk logo" /></Link>
            <h3 className="nav-list">
            <Link className="projects" to="/Projects">Projects</Link> |
            Lending Library |
            Account
            </h3>
        </div>
    )
}
