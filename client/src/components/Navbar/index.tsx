import React,{useState} from 'react'
import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import logo from '../../images/logo.png';
import NavbarItem from './NavbarItem';
import {NavbarListItems} from '../../utils/data.js'

const Navbar = ():React.ReactElement => {
    console.log(NavbarListItems)
    const [toggleMenu, setToggleMenu] =useState<boolean>(false);
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <img src={logo} alt="logo" className='w-32 cursor-pointer'/>
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                    {NavbarListItems.map((item, index)=>(
                        <NavbarItem key={item+index} title={item} classProps=""/>
                    ))}
                    <li className="bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]">
                        Login
                    </li>
                </ul>
                <div className="flex relative">
                    {toggleMenu
                    ?<AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggleMenu(false)}/>:
                    <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={()=>setToggleMenu(true)}/>    
                    }
                    {toggleMenu&&(
                        <ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
                            <li className="text-xl w-full my-2 cursor-pointer">
                                <AiOutlineClose onClick={()=>setToggleMenu(false)}/>
                            </li>
                            {NavbarListItems.map((item, index)=>(
                                <NavbarItem key={item+index} title={item} classProps="my-2 text-lg"/>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
