import { motion } from 'framer-motion'
import Button from './../components/Button'

export default function ContactMe() {
  return (
    <div className='py-10 overflow-hidden scrollbar-hide'>
      <motion.div
        animate={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className='transition max-w-2xl md:mb-10 md:mt-10 mb-20 mt-20 m-auto p-8 space-x-4'
        id='contact'>
        <h1 className='md:text-4xl text-2xl text-[#FFCC00]  mb-8 font-bold'>
          Vous cherchez un partenaire de conception et de marketing ?
        </h1>
        <Button Name='CONTACT' Selector='' BGC='hover:bg-[#FFCC00] transition text-[#FFCC00] hover:text-white border-2 border border-[#FFCC00] text-white' />
      </motion.div>
    </div>
  )
}
