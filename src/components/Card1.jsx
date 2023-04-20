import React from 'react'
import CardImage from '../assets/CardImage.png'
import List from '../assets/List.svg'
import ChatTeardropDots from '../assets/ChatTeardropDots.svg'
import LinkSimpleHorizontal from '../assets/LinkSimpleHorizontal.svg'
import ProfileStack from '../assets/ProfileStack.svg'
import Plus3 from '../assets/Plus3.svg'
import Threedot from '../assets/Threedot.svg'

const Card1 = () => {
  return (
        <div className=' w-[460px] h-[661px] 2xl:w-[320px] l:w-[266px]  '>
              <div className=' flex justify-between items-center h-[51px] w-[fill] rounded-lg px-4 py-2 bg-[#F4F6F8]'>
                <p className=' w-[45px] h-[19px] text-[16px] font-medium leading-[19px] text-left align-top text-[#858A93]'>To Do</p>
                <button className=' flex justify-center items-center w-[35px] h-[35px] rounded px-3 py-2 bg-black text-white
                '>3</button>
              </div>
              <div className=' h-[586px] w-[fill] '>
                <div className=' h-[346px] w-[fill] rounded-xl p-4 bg-white mt-6 drop-shadow-3xl '>
                  <div className=' flex justify-center'>
                   <img src={CardImage} alt='/' className=' l:w-[234px] 2xl:w-[280px] w-[440px] h-[168px] ' />
                   </div>
                   <div className=' flex'>
                   <div className=' l:w-[234px] 2xl:w-[275px] 2xl:ml-1 w-[435px] h-[44px] left-4 mt-[18px]'>
                    <p className=' l:w-[191px] 2xl:w-[240px] w-[400px] h-[19px] font-semibold text-[16px] leading-[19px] text-left align-top text-black '>Highfidelity Design</p>
                    <p className=' l:w-[191px] 2xl:w-[240px] w-[400px] h-[18px] font-normal text-[14px] leading-[17px] text-left align-top text-[#B8B9BD] mt-[8px]'>Make clear design and color</p>
                   </div>
                   <img src={Threedot} alt='/' />
                   </div>
                   <div className=' l:w-[234px] 2xl:w-[265px] 2xl:ml-1 w-[435px] h-[66px] left-4 mt-[18px] '>
                     <div className=' l:w-[234px] 2xl:w-[288px] w-[435px] h-[18px] flex justify-between items-center'>
                        <div className=' flex justify-between items-center'>
                            <img src={List} alt='/' className=' w-[18px] h-[18px]' />
                            <p className=' h-[17px] font-normal text-[14px] leading-4 text-left align-top text-[#B8B9BD] ml-1'>Progress</p>
                        </div>
                        <p className=' w-[33px] h-[17px] mt-[0.5px] font-medium text-[14px] leading-[17px] text-black text-left align-top'>2/10</p>
                     </div>
                     <div className=' l:w-[234px] 2xl:w-[288px] w-[430px] h-2 rounded-3xl bg-[#EBEBEB] mt-[8.5px]'></div>
                     <div className=' l:w-[234px] 2xl:w-[288px] w-[435px] h-[24px] mt-2 flex justify-between'>
                        <div className=' flex justify-between items-center'>
                        <div className=' flex justify-center items-center'>
                            <img src={ChatTeardropDots} alt='/' className=' w-[18px] h-[18px]' />
                            <p className='w-[18px] h-[15px] font-normal text-[12px] leading-[14.5px] text-[#B8B9BD] text-left align-top ml-1'>7</p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <img src={LinkSimpleHorizontal} alt='/' className=' w-[18px] h-[18px] ' />
                            <p className='w-[18px] h-[15px] font-normal text-[12px] leading-[14.5px] text-[#B8B9BD] text-left align-top ml-1'>2</p>
                        </div>
                        </div>
                        <img src={ProfileStack} alt='/' className=' w-[56px] h-[24px]' />
                     </div>
                   </div>
                </div>
                <div className=' w-[fill] h-[155px] bg-white rounded-xl drop-shadow-3xl mt-[14px] 2xl:left-4  '>
                <div className=' flex p-4 '>
                   <div className=' l:w-[234px] 2xl:w-[275px]  w-[435px] h-[44px] left-4 '>
                    <p className=' l:w-[191px] 2xl:w-[246px] w-[400px] h-[19px] font-semibold text-[16px] leading-[19px] text-left align-top text-black '>Usability testing</p>
                    <p className=' l:w-[191px] 2xl:w-[246px] w-[400px] h-[18px] font-normal text-[14px] leading-[17px] text-left align-top text-[#B8B9BD] mt-[8px]'>Make clear design and color</p>
                   </div>
                   <img src={Threedot} alt='/' />
                   </div>
                   <div className=' l:w-[234px] 2xl:w-[288px] w-[435px] h-[60px] ml-4  '>
                     <div className=' l:w-[234px] 2xl:w-[288px] w-[435px] h-[18px] flex justify-between items-center'>
                        <div className=' flex justify-between items-center'>
                            <img src={List} alt='/' className=' w-[18px] h-[18px]' />
                            <p className=' h-[17px] font-normal text-[14px] leading-4 text-left align-top text-[#B8B9BD] ml-1'>Progress</p>
                        </div>
                        <p className=' w-[33px] h-[17px] mt-[0.5px] font-medium text-[14px] leading-[17px] text-black text-left align-top'>2/10</p>
                     </div>
                     <div className=' l:w-[234px] 2xl:w-[288px] w-[430px] h-2 rounded-3xl bg-[#EBEBEB] mt-[8.5px]'></div>
                     <div className=' l-w-[234px] 2xl:w-[270px] w-[fill] h-[24px] mt-2 flex justify-between'>
                        <div className=' flex justify-between items-center'>
                         <div className=' l:w-[175px] 2xl:w-[236px] flex w-[376px]'>
                        <div className=' flex justify-center items-center'>
                            <img src={ChatTeardropDots} alt='/' className=' w-[18px] h-[18px]' />
                            <p className='w-[18px] h-[15px] font-normal text-[12px] leading-[14.5px] text-[#B8B9BD] text-left align-top ml-1'>7</p>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <img src={LinkSimpleHorizontal} alt='/' className=' w-[18px] h-[18px] ' />
                            <p className='w-[18px] h-[15px] font-normal text-[12px] leading-[14.5px] text-[#B8B9BD] text-left align-top ml-1'>2</p>
                        </div>
                        </div>
                        <div className=' w-[56px] h-[24px]'>
                        <img src={ProfileStack} alt='/' />
                        </div>
                        </div>
                     </div>
                   </div>
              </div>
              <div className=' w-[fill] h-[45px] rounded-xl border-[1px] border-[#D5D5D5] border-dashed stroke-[#D5D5D5] bg-[#F2F4F5] flex justify-center items-center gap-3 mt-[14px]'>
                <img src={Plus3} alt='/' className=' w-[24px] h-[24px] fill-[#7D8088]' />
                <p className=' w-[70px] h-[19px] font-medium text-[16px] leading-[19px] align-top text-left text-[#7D8088]'>Add Task</p>
              </div>
              </div>
           </div>
  )
}

export default Card1