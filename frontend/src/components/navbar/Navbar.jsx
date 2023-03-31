import React from 'react'
import "./navbar.css"
import logo from "./logo.png"
import { MdLocationPin } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { TbHeartFilled } from 'react-icons/tb';
import { GiShoppingBag } from 'react-icons/gi';
import { GrSearch } from 'react-icons/gr';

const Navbar = () => {
   
  return (
    <div id="nav__main">
       <div id="nav__top">
      
       </div>
       <div id="nav__medium">
           <div id="nav__logo">
              <img src={logo} alt="logo"/>
           </div>
           <div id="nav__menu"></div>
           <div id="nav__search">
             <input 
               type="text"
               placeholder="search"

            />
            <button><GrSearch/></button>
           </div>

           <div id="nav__auth__menu">
              <div><MdLocationPin/>PINCODE</div>
              <div id="con__logo"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HRAAAAilBMVEX/mTMSiAf/////jgAAdwAAAHoAAH/z8/kAAISmpsvr6/MAAIj7+/339/qhocmKiraCgrfS0ubCwt3Hx95lZacdHYne3utJSZwKCozY2OdubquenslXV52JibshIYszM5NaWplPT5m4uNOxsdB2drI5OZUQEIZfX6WVlcFiYp5sbKFOTp19fbctLZBeMDIOAAACiklEQVR4nO2YbW+jMAyAe945gQAphNCVt9ECa2Hj/v/fu3T7sk3TfXKj5eRHahX44keRcRzvdgzDMAzDMAzDMAzDMAzDMAzDMAzDMP8pD6Gyg1Bhc/+w+RfSw5g/HqPjYz4e0vuEuI+5aS6IESIKxEtj7hLjHub1M4qqaTujTNc2lcDn+g5R7mC+XHC49pBJKEBm0F8HvCz0YcjN01ngJgGk2+fR7f9tuaGYybOd3HwWVVc77dRk0EJmUidfd5WYqQNRmy/iqXDbaxTEChpQMSj3gabFk6BOGGLz4oIWSgClwRiwtz+twL2xeCloQxGbD5i7/NYS2iKzsILN6hakdvme40AbitZ8xMFVE5C5zF6hU6vq4Jy6J3CVZsCRNBapebYKC7XLcdmoSffxS9zrSTXS5XoNVqwZZTBS8zqp9rcc1+nhVJ7H/bofz+XpkOrW5XpfHUkPJFLzCWdwmQHF61SuepvstOm1nB5v36aEGSfKYKTmM8ayMHGZgT7rRS9X94vPC6RlbGoZI2lNJzUfIptBpozt+nHTNkoiG29jf7JGufc2Iq0upOYJlu8LFe+nNkqSJFrGvTuS3igxoQxGai5QFqNu7Lq+rPaa3LDWrdfVLmOhUFAG4z1/47s8z4PI88+1JW6vraswQdSWz/U8d/U8D6Se18eq/+YMBa1/+hn6z76l+cl9y8de8RxUr3jrz7fivT+vv/Tn28/uzwO+E4V7Dw347v8+b1EhzlveZlx/ugBnXBDwXBHCneXCx/m5CWt+7gM290/A5r9DZfcrVNjcP2zuHzb3D5v7h839w+b+YXP/sLl/2Nw/bO4fNvcPm/uHzf3D5v5hc/+wuX/Y3D9s7h8290+45n8Bu8WRFAkbtYwAAAAASUVORK5CYII=" alt="india flag" /></div>
              <div><FaUser/></div>
              <div><TbHeartFilled/></div>
              <div><GiShoppingBag/></div>
           </div>
       </div>

       <div id="nav__bottom"></div>
    </div>
  )
}

export default Navbar