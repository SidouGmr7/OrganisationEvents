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
        drag
        dragConstraints={{
          top: -125,
          right: 0,
          bottom: 450,
          left: 0,
        }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        whileTap={{ cursor: 'grabbing' }}
        onClick={() => setShowAgenda((prevStat) => !prevStat)}
        className='fixed right-0 top-1/4 mr-4 bg-slate-800 bg-opacity-70 transition-all md:hover:opacity-100 md:opacity-60 backdrop-blur-md p-4 z-50 rounded-full'>
        <AiTwotoneCalendar className='text-[#FFCC00] text-[2rem]' />
      </motion.div>
      <motion.div
        animate={{ x: 400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className={`${
          ShowAgenda ? 'flex' : 'hidden'
        } md:-mt-64 w-[100%] fixed md:p-44 z-40 `}>
        <Agenda bol={true} />
      </motion.div>
    </>
  )
}

export default FlotAgenda
