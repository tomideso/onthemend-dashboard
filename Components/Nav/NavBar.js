import React from 'react'
import Link from 'next/link'
import Logo from 'Public/Image/Logo.svg'
import ontheMend from 'Public/Image/OntheMend.png'


const NavBar = () => {
    return (
        <header>
            <nav className={['uk-container-expand uk-navbar uk-card-default uk-card uk-card-small'].join(' ')} uk-navbar="">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav ">
                        <li className="uk-text-large">
                            <Link href="/">
                                <a className="uk-padding-small">
                                    <img className="uk-preserve uk-margin-small-right" data-src={Logo} width="30" height="30" alt="" uk-img=""/>
                                    <img data-src={ontheMend} width="100" height="100" alt="" uk-img=""/>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        {/* <li className="uk-text-large">
                            <Link href="/last_login">
                                <a className="uk-text-danger">LastLogin</a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>)

}

export default NavBar;