import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { Agenda } from '../pages/Agenda'

const FlotAgenda = () => {
  const [ShowAgenda, setShowAgenda] = useState(false)

  return (
    <>
      <motion.div
        onClick={() => setShowAgenda((prevStat) => !prevStat)}
        className='fixed right-0 top-1/4 mr-4 bg-slate-800 bg-opacity-70 transition-all md:hover:opacity-100 md:opacity-60 backdrop-blur-md p-4 z-50 rounded-full'>
        <AiTwotoneCalendar className='text-[#FFCC00] text-[2rem]' />
      </motion.div>
      <div
        className={`${
          ShowAgenda ? 'flex' : 'hidden'
        } md:-mt-64 w-[100%] fixed md:p-44  z-40 `}>
        <Agenda bol={true} />
      </div>
    </>
  )
}

export default FlotAgenda
