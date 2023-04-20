import React from 'react'
import Lightning from '../assets/Lightning.svg'
import Dashboard from '../assets/Dashboard.svg'
import Settings from '../assets/Settings.svg'
import User from '../assets/User.svg'
import AddedUser from '../assets/AddedUser.svg'
import Affiliate from '../assets/Affiliate.svg'
import Plus from '../assets/Plus.svg'

const SideMenu = () => {
  return (
    <div className=" w-[272px] h-[1024px] px-[32px] py-[38px] bg-[#1D1042] justify-between ">
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
  )
}

export default SideMenu