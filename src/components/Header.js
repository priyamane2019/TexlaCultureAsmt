import React from 'react'
import { CiSearch } from "react-icons/ci";
import { HiUsers } from "react-icons/hi";
import "./Header.css"

const Header = () => {
  return (
    <>
    <div className="container">
        <div className="content">
            <div className='search'>     
            <CiSearch />
            </div>
            <div className="headerright">
            <div className='imglogo'>
            <img src="./images/flag1.png" alt="logo" />
            </div>
            <div className='imglogo' >
            <img src="./images/notification1.png" alt="logo" />
            </div>
            <div className='imglogo'>
            <HiUsers size={30}/>
            </div>
            <div className='imglogo'>
            <img src="./images/profileimg.png" alt="logo" />
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Header