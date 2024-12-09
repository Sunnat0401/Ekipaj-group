"use client"
import Image from "next/image"
import logo from '../../../public/logo_main.jpg'
import { IoMdMenu } from "react-icons/io";
import './Navbar.css'
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {

    const [active, setActive] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className='container'>
                    <a href="#" className="navbar-link"><Image className='navbar-logo' src={logo} alt="logo" /></a>
                    <ul className="navbar-lists">
                        <li className="navbar-list"><a href="#" className="navbar-link">Asosiy</a></li>
                        <li className="navbar-list"><a href="#about" className="navbar-link">Biz haqimizda</a></li>
                        <li className="navbar-list"><a href="#service" className="navbar-link">Xizmatlar</a></li>
                    </ul>
                    <a className='navbar-anchor' href="#contact" >
                        <button className='navbar-btn' >
                            Bog`lanish
                        </button></a>
                </div>
            </div>
            <div className="navbar-res">
                <div className="navbar-top-res">
                    {!active ? <button className="navbar-btn-res" onClick={() => setActive(true)}><IoMdMenu size={30} style={{cursor: "pointer"}} color="white" /></button> : <button className="navbar-btn-res" onClick={() => setActive(false)}>
                        <IoMdClose size={30} style={{cursor: "pointer"}} color="white" /></button>}
                </div>
                <div className={`navbar-body-res ${active && 'active'}`}>
                    <div>
                        <a href="#" className="navbar-link-res" onClick={() => setActive(false)}><Image className='navbar-logo' src={logo} alt="logo" /></a>
                    </div>
                    <ul className="navbar-lists-res">
                        <li className="navbar-list-res">
                            <a href="#" className="navbar-link-res" onClick={() => setActive(false)}> Asosiy</a>
                        </li>
                        <li className="navbar-list-res">
                            <a href="#about" className="navbar-link-res" onClick={() => setActive(false)}>Biz haqimizda</a>
                        </li>
                        <li className="navbar-list-res">
                            <a href="#service" className="navbar-link-res" onClick={() => setActive(false)}>Xizmatlar</a>
                        </li>
                    </ul>
                    <div className="navbar-btn-container">
                        <a className='navbar-anchor-res' href="#contact" onClick={() => setActive(false)}>
                            <button className='navbar-res-btn'>
                                Bog`lanish
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
