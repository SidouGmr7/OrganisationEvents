import React from 'react'
import Footer from '../components/Footer'
import ContactMe from './Contact'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SeminaireN from './SeminaireN'
import { useLocation } from 'react-router-dom'

const Presentation = () => {
  const [t, i18n] = useTranslation()
  const location = useLocation().pathname
  console.log(location)
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className='h-96 flex  items-center justify-center ml-4  transition duration-1000'>
        <p className=' md:text-5xl text-4xl font-bold capitalize text-[#FFCC00] first-letter:text-[#E50914]'>
          {location === '/seminairesinternational' ? t('titre.2') : t('titre.3')}
        </p>
      </motion.div>
      <SeminaireN Path={location} />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Presentation
