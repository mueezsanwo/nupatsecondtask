import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const BodyCards = () => {
  return (
    <div className=' flex justify-center absolute lg:absolute 2xl:absolute bg-[#FCFBFC] w-[fill] left-[272px] top-[261px] h-[stretch]'>
        <div className=' mt-[64px] h-[661px] flex gap-[40px] 2xl:gap-[80px] 2xl:ml-[0px]  ml-[64px] justify-center'>
           <Card1  />
           <Card2 />
           <Card3 />
        </div>
    </div>
  )
}

export default BodyCards