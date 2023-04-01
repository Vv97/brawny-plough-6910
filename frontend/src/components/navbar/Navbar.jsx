import React from 'react'
import "./navbar.css"
import logo from "./logo.png"
import { MdLocationPin } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { TbHeartFilled } from 'react-icons/tb';
import { GiShoppingBag } from 'react-icons/gi';
import { IoSearch } from 'react-icons/io5';

import { IoHomeOutline } from 'react-icons/io5';
import { IoStorefrontOutline } from 'react-icons/io5';
import { IoBagAddOutline } from 'react-icons/io5';
import { AiOutlineGold } from 'react-icons/ai';



const Navbar = () => {
   
  return (
    <div id="nav__main">
       <div id="nav__top">
      
       </div>
       <div id="nav__medium">
           <div id="nav__logo">
              <img 
                src={logo}
                alt="logo"
                height="100%"
                width="100%"
              />
           </div>

           <div id="nav__menu">
              <div>
                <IoHomeOutline class="nav__icone__logo"/>
                <a href="/">FREE TRY AT HOME</a>
              </div>
              <div>
                <IoStorefrontOutline class="nav__icone__logo"/>
                <a href="/">FIND STORE</a>
              </div>
              <div>
                <IoBagAddOutline class="nav__icone__logo"/>
                <a href="/">PLAN OF PURCHASE</a>
              </div>
              <div>
                <AiOutlineGold class="nav__icone__logo"/>
                <a href="/">BUY DIGITAL GOLD</a>
              </div>
           </div>


           <div id="nav__search">
             <input 
               type="search"
               placeholder="Search"

            />
            <button><IoSearch class="nav__icone__search"/></button>
           </div>


           <div id="nav__auth__menu">
              <div><MdLocationPin class="nav__auth__icone"/><p>PINCODE</p></div>
              <div>
                  <div >
                    <img class="flag" src="https://www.mapsofindia.com/maps/india/india-flag-1280x768.jpg" alt="india flag" />
                  </div>
                  <div><FaUser class="nav__icon" /></div>
                  <div><TbHeartFilled class="nav__icon" /></div>
                  <div><GiShoppingBag class="nav__icon" /></div>
              </div>
           </div>
       </div>

       <div id="nav__bottom"></div>
    </div>
  )
}

export default Navbar