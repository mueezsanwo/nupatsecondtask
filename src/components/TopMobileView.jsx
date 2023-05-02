import React from 'react'
import ProfileStack from '../assets/ProfileStack.svg'
import BoardView from '../assets/BoardView.svg'
import List from '../assets/List.svg'
import Lightning from '../assets/Lightning.svg'
import ParticipantView from '../assets/ParticipantView.svg'
import PowerView from '../assets/PowerView.svg'
import Plus2 from '../assets/Plus2.svg'

const TopMobileView = () => {
  return (
    <div className='hidden ss:block m:block'>
        <p className=' ml-2 mt-4 font-medium text-[22px] leading-[28px] text-[#B8B9BD] h-[22px]  text-left align-top'><span className=' ml-2'>A new campaign launch work for brand</span> new feature in May month.</p>
        <div className=' flex mt-10 ml-2'>
         <img src={ProfileStack} alt='/' />
         <p className=' mt-[7.5px] h-[17px] font-normal text-[18px] leading-[19px] text-[#B8B9BD] align-top text-left ml-2'>8 members</p>
         </div>
         <div className=' grid grid-cols-2  ml-2 mt-5'>
            <div className=' flex mt-2'>
                <img src={ParticipantView} alt='/' className=' w-[20px] h-[20px]' />
                <p className=' ml-2  h-[17px] text-[16px] font-medium leading-[18px] align-top text-left text-[#7D8088]'>Participants View</p>
            </div>
            <div className=' flex mt-2'>
                <img src={BoardView} alt='/' className=' w-[20px] h-[20px]' />
                <p className=' ml-2  h-[17px] text-[16px] font-medium leading-[18px] align-top text-left text-[#7D8088]'>Board View</p>
            </div>
            <div className=' flex mt-2'>
                <img src={List} alt='/' className=' w-[20px] h-[20px]' />
                <p className=' ml-2  h-[17px] text-[16px] font-medium leading-[18px] align-top text-left text-[#7D8088]'>List View</p>
            </div>
            <div className=' flex mt-2'>
                <img src={PowerView} alt='/' className=' w-[20px] h-[20px]' />
                <p className=' ml-2  h-[17px] text-[16px] font-medium leading-[18px] align-top text-left text-[#7D8088]'>Power View</p>
            </div>
            <img src={Plus2} alt='/' className=' w-[20px] h-[20px] mt-2' />
         </div>
       </div>
    
  )
}

export default TopMobileView