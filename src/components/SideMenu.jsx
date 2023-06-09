import React, {useState} from 'react'
import Lightning from '../assets/Lightning.svg'
import Dashboard from '../assets/Dashboard.svg'
import Settings from '../assets/Settings.svg'
import User from '../assets/User.svg'
import AddedUser from '../assets/AddedUser.svg'
import Affiliate from '../assets/Affiliate.svg'
import Plus from '../assets/Plus.svg'
import {AiOutlineMenu} from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai';
import Hamburger from './Hamburger'


const SideMenu = () => {

   const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    };

  return (
   <div>
    <div className="  ss:hidden m:hidden  w-[272px] h-[1024px] px-[32px] py-[38px] bg-[#1D1042] justify-between ">
        <div className=' w-[208px] h-[486px] text-white'>
          <div className=' flex w-[208px] h-[46px] rounded-lg px-[16px] py-[12px] bg-[#45269C]  gap-2  justify-center '>
          <img className='' src={Lightning} alt='/' />  
          <p className='text-[16px] leading-[19px] align-top text-left font-normal '>Welcome Keerthi</p>  
          </div>
          <div className=' w-[208px] h-[400px] mt-[0px] px-[8px]'>
            <div className=' w-[192px] h-[18px] gap-[9px] flex justify-center mt-[40px] ml-[1px]'>
               <img src={Dashboard} alt='/' />
               <p className=' w-[166px] h-[17px] font-medium text-[14px] leading-[17px]'>Dashboard</p> 
            </div>
            <div className=' w-[192px] h-[18px] gap-[9px] flex justify-center ml-[1px] mt-[33px]'>
               <img src={Settings} alt='/' />
               <p className=' w-[166px] h-[17px] font-medium text-[14px] leading-[17px]'>Settings</p> 
            </div>
            <div className=' w-[192px] h-[18px] gap-[9px] flex justify-center ml-[1px] mt-[33px]'>
               <img src={Lightning} alt='/' />
               <p className=' w-[166px] h-[17px] font-medium text-[14px] leading-[17px]'>Activities</p> 
            </div>
            <div className=' w-[192px] h-[18px] gap-[9px] flex justify-center ml-[1px] mt-[33px]'>
               <img src={User} alt='/' />
               <p className=' w-[166px] h-[17px] font-medium text-[14px] leading-[17px]'>Users</p> 
            </div>
            <div className=' w-[192px] h-[18px] gap-[9px] flex justify-center ml-[1px] mt-[33px]'>
               <img src={AddedUser} alt='/' />
               <p className=' w-[166px] h-[17px] font-medium text-[14px] leading-[17px]'>Added User</p> 
            </div>
            <div className=' w-[192px] h-[18px] gap-[9px] flex justify-center ml-[1px] mt-[33px]'>
               <img src={Affiliate} alt='/' />
               <p className=' w-[166px] h-[17px] font-medium text-[14px] leading-[17px]'>Affiliate</p> 
            </div>
            <div className=' w-[192px] border-b-[1px] border-b-white mt-[32px]'></div>
            <div className=' w-[192px] h-[18px] gap-[9px] flex justify-center ml-[1px] opacity-70 mt-[33px]  '>
               <img src={Lightning} alt='/' />
               <p className=' w-[166px] h-[17px] font-medium text-[14px] leading-[17px]'>Profile</p> 
            </div>
            <div className=' w-[192px] h-[18px] gap-[9px] flex justify-center ml-[1px] opacity-70 mt-[32px] '>
               <img src={User} alt='/' />
               <p className=' w-[166px] h-[17px] font-medium text-[14px] leading-[17px]'>Logout</p> 
            </div>
          </div>
        </div>
        <div className=' w-[208px] h-[46px] rounded-lg px-[16px] py-[12px] bg-[#45269C]  mt-[408px] text-white '>
          <div className=' flex justify-center items-center gap-2 mb-[38px]'>
          <img className='' src={Plus} alt='/' />  
          <p className='text-[16px] leading-[19px] align-top text-left font-normal '>New Project</p>  
          </div>
          </div>
    </div>
    <div>
         {/* menu Icon */}
        <div className='  mt-2 ss:block m:block hidden '>
        <div className=' flex justify-between'>
        <div onClick={handleNav} className=' ss:block m:block hidden cursor-pointer z-10 mt-2 ml-1 '>
            {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={20} />}
        </div>
        <div>
         <h1 className=' mt-2  justify-center h-[46px] font-bold text-[20px] leading-[24px] text-left align-top tracking-[-2%] text-[#000000] '>New Campaign Run</h1>
        </div>
        <div>
         <button className=' mt-1  w-[100px] h-[40px] p-3 rounded-lg mr-1 bg-black text-white text-xs
         ' >Add Members</button>
        </div>
        </div>
        {/* mobile menu */}
        <div className={nav ? 'hidden ss:block m:block  fixed left-0 top-20  flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10' : 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300'}>
            <Hamburger />   
        </div>
        </div>
    </div>
    </div>
  )
}

export default SideMenu