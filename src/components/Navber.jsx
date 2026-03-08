import React from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";


const navItems =[
  { path:"/", label:'Furniture'},
  { path:"/Shop", label:'Shop'},
  { path:"/About", label:'About us'},
  { path:"/Contact", label:'Contact'},
];

const NavItems = ({toggleMenu}) =>{
  return(
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {
        navItems.map((item, index) =>(
          <li key={index} onClick={toggleMenu}><NavLink to={item.path} className={({isActive})=> isActive ? "text-primary font-bold" : "hover:text-primary"}>{item.label}</NavLink></li>
        ))
      }
    </ul>
  )
}

function Navber( ) {
 const [ismenuopen, setIsmenuopen] = useState(false);
 const [isScrolled, setIsScrolled] = useState(false);

 const toggleMenu = ()=>{
    setIsmenuopen(preState => !preState)
 }

 //when scroll apply bg color 
 useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 50){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll',handleScroll );
    return()=>{
        window.addEventListener('scroll',handleScroll );
    }
 },[])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out ${isScrolled ? "bg-white Shadow-md" : "bg-transparent text-white"}`}>
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        {/* logo */}
        <NavLink to="/" className="font-bold">Panto</NavLink>

        {/* mobile menu */}
        <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer hover:text-primary">
          {ismenuopen ? null : <FaBars />}
          </div>
        
        {/* desktopmenu items */}
        <div className="hidden md:flex">
          <NavItems/>
        </div>

        {/* mobile menu items */}
        <div  className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
    ismenuopen ? "translate-x-0" : "translate-x-full"
  } md:hidden`}>
          <div className=' absolute top-4 right-4 text-xl cursor-pointer ' onClick={toggleMenu}>
            <FaTimes />
            </div>
            <NavItems toggleMenu={toggleMenu}/>
        </div>

        {/* card icon */}
        <div className="hidden md:block cursor-pointer relative">
          <CiShoppingCart className="text-4xl" />
          <sup className="absolute top-0 right-0 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">0</sup>
        </div>
      </nav>
    </header>
  )
}

export default Navber;