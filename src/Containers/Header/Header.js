import React from 'react'

import HeaderNavigation from '../../Components/HeaderComponents/HeaderNavigation/HeaderNavigation'
import HeaderLogin from '../../Components/HeaderComponents/HeaderLogin/HeaderLogin'

import './Header.css'

export default function Header() {
    return (
        <div className="header-container">
            <div className="header__bg"></div>
            <HeaderNavigation />
            <HeaderLogin />
        </div>
    )
}
