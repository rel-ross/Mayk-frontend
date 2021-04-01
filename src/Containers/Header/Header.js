import React from 'react'

import HeaderNavigation from '../../Components/HeaderComponents/HeaderNavigation/HeaderNavigation'
import HeaderLogin from '../../Components/HeaderComponents/HeaderLogin/HeaderLogin'

import HeaderBackground from '../../Assets/fluid_orange-01.svg'

import './Header.css'

export default function Header() {
    return (
        <div>
        <div className="header__bg"></div>
        <HeaderNavigation />
         <HeaderLogin />
        </div>
    )
}
