import React, { useState } from 'react'
import "./NavBar.scss";
import { images } from '../../Constant';
import { NavLink } from 'react-router-dom';


import {HiMenuAlt4 ,HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';
const NavBar = () => {

  const [toggle,setToggle]=useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo_parvez} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'AddTifin', 'View-Tifin', 'Add-Other','Other-Details' ].map((item)=>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            
            {item}
           
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={()=>setToggle(true)}/>

          {toggle &&(
            <motion.div
            whileInView={{x:[300,0]}}
            transition={{duration:0.85, ease:'easeOut'}}
            >
              <HiX onClick={()=>setToggle(false)}/>
              
            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default NavBar