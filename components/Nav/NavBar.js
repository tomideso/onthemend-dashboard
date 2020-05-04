import React from 'react'
import Link from 'next/link'
import Logo from 'public/Image/Logo.svg'
import ontheMend from 'public/Image/OntheMend.png'
import {LINKS} from 'utility/sitemap'


const NavBar = (props) => {
    return (
        <header>
            <nav className="uk-navbar-container uk-card uk-card-default uk-background-default zIndex" uk-navbar="">
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav ">
                        <li className="uk-text-large">
                            <Link href="/">
                                <a className="uk-padding-small uk-logo">
                                    <img className="uk-preserve uk-margin-small-right" data-src={Logo} width="30" height="30" alt="" uk-img=""/>
                                    <img data-src={ontheMend} width="100" height="100" alt="" uk-img="" />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="uk-navbar-right uk-container">
                    <ul className="uk-navbar-nav">
                        <li className="uk-text-large button_padding">
                            <Link href="/login">
                                <button className="uk-button uk-button-primary uk-button-small">
                                    Login
                                </button>
                            </Link>
                        </li>
                        <li className="uk-text-large button_padding">
                            <>
                                <button className="uk-button uk-button-small tm-outline-primary uk-text-primary">Signup</button>
                                <div className="uk-navbar-dropdown signup_dropdown">
                                    <ul className="uk-nav uk-navbar-dropdown-nav">
                                        <li className="uk-active">
                                            <Link href={LINKS.SIGNUP}>
                                                <a className="tm-outline-primary uk-text-primary" href="#">
                                                    <div className="uk-inline signup_padding" uk-icon="icon: user"></div>
                                                    <div className="uk-inline">
                                                        <div className=""> Sign up as a</div>
                                                        <div className="uk-text-bold">Patient</div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="uk-margin-small-top">
                                            <Link href={LINKS.SIGNUP}>
                                                <a className="tm-outline-primary uk-text-primary">
                                                    <div className="uk-inline signup_padding" uk-icon="icon: user"></div>
                                                    <div className="uk-inline">
                                                        <div className=""> Sign up as a</div>
                                                        <div className="uk-text-bold">Health Professional</div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        </li>

                    </ul>
                </div>
            </nav>
            <style jsx>{`
                .button_padding{
                    padding:10px;
                }
                
                .signup_padding{
                    padding-left:5px;
                    padding-right:10px;
                }

                .signup_dropdown{
                    width:220px;
                }

                .zIndex{
                    z-index:100;
                }
            `}
            </style>

        </header>)

}

export default NavBar;