import React, { useState } from 'react';
import { FaExpandAlt } from "react-icons/fa";
import { BiCollapseAlt } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { MdMonitor } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoMdCalendar } from "react-icons/io";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { BsAmd } from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa6";
import { MdFeaturedPlayList } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import './index.css'; 
import { useNavigate } from 'react-router-dom';


const Sidebar = (props) => {
 const {toggleSidebar,isOpen}=props

  const toggleSidebarr=()=>{

    toggleSidebar(isOpen)

  }

  const navigate=useNavigate()

  const handleLogout=()=>{
    navigate("/login")
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>


        {isOpen? <button className='toggle-icon' onClick={toggleSidebarr}> 
        <BiCollapseAlt />
      </button> :  <button className='toggle-icon' onClick={toggleSidebarr}> 
      <FaExpandAlt />
      </button> }
      
      <div className='buttons-container'>
      <BsAmd className='main-icon' size={25}/>
      <IoSearchOutline className='navicon' size={25} />
      <MdMonitor  className='navicon' size={25} />
      <AiOutlineQuestionCircle  className='navicon' size={25} />
      <IoMdCalendar  className='navicon' size={25} />
      <MdFeaturedPlayList  className='navicon' size={25}/>
      <HiMiniCurrencyDollar  className='navicon' size={25}/>
      <FaHeadphones  className='navicon' size={25} />

      <IoSettings className='settings-icons' size={25} />
      <IoLogOut onClick={handleLogout} className='navicon' size={25} />

      </div>
     
    

    </div>
  );
};

export default Sidebar;