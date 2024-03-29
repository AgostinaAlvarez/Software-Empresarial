/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import SubMenuProfile from './SubMenuProfile';
import { AppContext } from '../context/AppContext';

const NavBar = () => {
  const { openSubMenu,setOpenSubMenu } = useContext(AppContext);

  return (
    <header className='header'>
      <div onClick={()=>{setOpenSubMenu(!openSubMenu)}} style={{cursor:"pointer",height:35,width:35,backgroundColor:"violet",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}}>I</div>
      { openSubMenu === true ? <SubMenuProfile/> : <></> }
    </header>
  )
}

export default NavBar