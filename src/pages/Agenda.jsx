import React from 'react'
import Scroll from '../components/Scroll'
import Calendar from 'react-calendar'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BG1 from '../images/SalonN.jpg'
import BG2 from '../images/SalonI.JPG'
import BG3 from '../images/SemitaireN.jpg'
import BG4 from '../images/SemitaireI.jpg'
import Switch from '../data/event'

export const Agenda = ({ bol }) => {
  const [t] = useTranslation()
  const [date, setDate] = useState(new Date())
  const [name, setName] = useState(t('agenda.0'))
  const [image, setImage] = useState(BG1)

  const Event = ({ Name, BG }) => {
    return (
      <div className='md:w-[50%] md:mt-20'>
        <div className='relative'>
          <img src={BG} alt='event' className=' rounded-full' />
          <p className='absolute top-1/2 right-1/4 md:p-5 p-2 md:text-xl lg:text-2xl  text-md max-w-md text-[#FFCC00] bg-slate-600 bg-opacity-80 backdrop-blur-xs rounded-full  capitalize first-letter:text-[#E50914]'>
            {Name}
          </p>
        </div>
      </div>
    )
  }

  const onChange = (date) => {
    setDate(date)
    const DateSelect =
      date.getDate().toString() +
      '/' +
      (date.getMonth() + 1).toString() +
      '/' +
      date.getFullYear().toString()
    console.log(DateSelect)
    setName(<Switch DateSelect={DateSelect} />)
  }

  return (
    <div
      className={`overflow-hidden scrollbar-hide ${
        bol ? '' : 'bg-slate-900 bg-opacity-80'
      }`}>
      <div
        className=' relative max-w-[95%]  lg:h-screen py-20 mx-auto'
        id='agenda'>
        <p className='uppercase text-slate-300 text-2xl md:text-4xl font-bold text-center  md:mb-10 relative before:absolute before:rounded-lg before:w-10 before:h-1 before:-bottom-1 before:bg-slate-300'>
          {t('Navbaritem.5')}
        </p>
        <div className='flex md:flex-row flex-col gap-10'>
          <Calendar
            onChange={onChange}
            value={date}
            className='text-[#FFCC00] md:text-2xl items-center flex md:leading-6 leading-4 flex-col justify-center font-bold bg-slate-900 bg-opacity-80 backdrop-blur-sm md:p-6 p-2 w-[50%] rounded-[10%]'
          />
          <Event Name={name} BG={BG1} />
        </div>
        {!bol && <Scroll selector='#contact' />}
      </div>
    </div>
  )
}
