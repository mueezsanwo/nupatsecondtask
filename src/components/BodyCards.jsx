import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const BodyCards = () => {
  return (
    <div className=' flex justify-evenly absolute m:flex m:justify-center m:items-center m:left-0 ss:flex ss:justify-center ss:items-center ss:left-0   l:absolute 2xl:absolute bg-[#FCFBFC] w-[fill] left-[272px] top-[261px] h-[stretch] ss:relative ss:top-[20px] m:top-[20px] m:relative   '>
        <div className='  h-[661px] flex gap-[40px] 2xl:gap-16 ss:flex-col m:flex-col  '>
           <Card1  />
           <Card2 />
           <Card3 />
        </div>
    </div>
  )
}

export default BodyCards