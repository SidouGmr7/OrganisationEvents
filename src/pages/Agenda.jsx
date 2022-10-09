import React from 'react'
import Scroll from '../components/Scroll'

export const Agenda = () => {
  return (
    <div className='py-10 overflow-hidden scrollbar-hide bg-slate-900 bg-opacity-80'>
      <div
        className='relative max-w-4xl lg:h-screen mx-auto  py-28'
        id='agenda'>
       
        <Scroll selector='#contact' />
      </div>
    </div>
  )
}
