import React, {Component, useState} from 'react';
import logo from '../images/logo.svg'
import { FaAlignRight } from 'react-icons/fa';
import {Link} from 'react-router-dom';

/*
export default class Navbar extends Component{
    render(){
        return(
         <div>
             Hello from navbar
         </div>
        )
    }
}*/
/* ----------- function base --------------- */
const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => !isOpen ? setIsOpen(true): setIsOpen(false);
    return(
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="hotel"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={toggle}>
                        <FaAlignRight class="nav-icon"/>
                    </button>
                </div>
                <ul className={isOpen? "nav-links show-nav": "nav-links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
