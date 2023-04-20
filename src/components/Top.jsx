import React from 'react'
import ProfileStack from '../assets/ProfileStack.svg'
import BoardView from '../assets/BoardView.svg'
import List from '../assets/List.svg'
import Lightning from '../assets/Lightning.svg'
import ParticipantView from '../assets/ParticipantView.svg'
import PowerView from '../assets/PowerView.svg'
import Plus2 from '../assets/Plus2.svg'

const Top = () => {
  return (
       <div className=' absolute left-[272px] w-[fill] top-0 h-[221px] bg-[#FFFFFF] drop-shadow-4xl '>
       <div className=' h-[67px] mt-[40px] flex justify-between'>
          <div className=' ml-[64px]'>
            <h1 className=' h-[46px] font-semibold text-[38px] leading-[46px] text-left align-top tracking-[-2%] text-[#000000]'>New Campaign Run </h1>
            <p className=' font-normal text-[14px] leading-[17px] text-[#B8B9BD] h-[14px] text-left align-top'>A new campaign launch work for brand new featur in May month</p>
          </div> 
          <button className=' bg-black w-[160px] h-[41px] p-3 rounded-lg font-normal text-[14px] mt-[13px] leading-[17px] text-white mr-[64px]'>ADD MEMBERS</button>
       </div>
       <div className=' h-[34px] ml-[64px] mt-[56px] flex justify-between mr-[64px]'>
         <div className=' flex'>
         <img src={ProfileStack} alt='/' />
         <p className=' mt-[7.5px] h-[17px] font-normal text-[14px] leading-[17px] text-[#B8B9BD] align-top text-left ml-2'>8 members</p>
         </div>
         <div className=' flex gap-[20px] mt-2'>
            <div className=' flex'>
                <img src={ParticipantView} alt='/' className=' w-[18px] h-[18px]' />
                <p className=' ml-1 mt-[0.5px] h-[17px] text-[14px] font-medium leading-[17px] align-top text-left text-[#7D8088]'>Participants View</p>
            </div>
            <div className=' flex'>
                <img src={BoardView} alt='/' className=' w-[18px] h-[18px]' />
                <p className=' ml-1 mt-[0.5px] h-[17px] text-[14px] font-medium leading-[17px] align-top text-left text-[#7D8088]'>Board View</p>
            </div>
            <div className=' flex'>
                <img src={List} alt='/' className=' w-[18px] h-[18px]' />
                <p className=' ml-1 mt-[0.5px] h-[17px] text-[14px] font-medium leading-[17px] align-top text-left text-[#7D8088]'>List View</p>
            </div>
            <div className=' flex'>
                <img src={PowerView} alt='/' className=' w-[18px] h-[18px]' />
                <p className=' ml-1 mt-[0.5px] h-[17px] text-[14px] font-medium leading-[17px] align-top text-left text-[#7D8088]'>Power View</p>
            </div>
            <img src={Plus2} alt='/' className=' w-[18px] h-[18px]' />
         </div>
       </div>
    </div>
  )
}

export default Top