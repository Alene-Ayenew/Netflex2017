import React from 'react'
import "./Header.css"
import NetflixLogo from "../../Images/netflix.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
function Header() {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
             <div className='header_left'>
                 <ul>
                    <li><img src={NetflixLogo}  alt="Netflix logo" width="100 %" /></li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TVShow</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyLists</li>
                    <li>Browse by language</li>
                 </ul>
             </div>
             <div className="header_right">
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon/></li>
                    <li><AccountBoxIcon/></li>
                    <li><ArrowDropDownCircleIcon/></li>
                </ul>
             </div>
        </div>
    </div>
  )
}

export default Header