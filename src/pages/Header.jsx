import React from 'react'
import Scroll from '../components/Scroll'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [t, i18n] = useTranslation()
  return (
    <div
      className=' md:h-screen screen-full md:p-28 md:pt-40 pt-40 overflow-hidden'
      id='home'>
      <div className='flex md:flex-row flex-col items-center'>
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='md:w-[50%] flex flex-col items-center ml-4 transition duration-1000'>
          <div className='md:space-x-10 md:space-y-4'>
            <p className=' md:text-6xl text-4xl font-bold  capitalize space-y-6 space-x-10 text-[#FFCC00]'>
              <h1 className='first-letter:text-[#E50914]'>{t('TitreHome.1')}</h1>
              <div className='flex md:space-x-5 space-x-2 space-y-6'>
                <h1>{t('TitreHome.2')}</h1>
                <h1 className='first-letter:text-[#E50914]'>{t('TitreHome.3')}</h1>
              </div>
              <div className='flex md:space-x-5 space-x-2 space-y-4 pl-12'>
                <h1>{t('TitreHome.4')}</h1>
                <h1 className='first-letter:text-[#E50914]'>{t('TitreHome.5')}</h1>
              </div>
            </p>
            <div className='flex flex-col items-center  p-4 text-white space-y-2 space-x-5 mr-10'>
              <h1 className=' capitalize md:text-base mb-5 text-slate-300 text-justify text-sm'>
                {t('DescriptionHome')}
              </h1>
              <Button
                Name='SAVOIR PLUS'
                Selector='#service'
                BGC='hover:bg-[#FFCC00] text-white border-2 border border-[#FFCC00]'
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className='md:w-[50%] transition duration-1000'>
          <img
            src='https://digitalmarketingdz.com/wp-content/uploads/2022/09/home-01-01-01-01-1024x1024.png'
            alt='Développement site web'
            loading='lazy'
            className='w-[70%] animate-[bounce_4s_ease-in-out_infinite] md:ml-20 ml-16 md:mt-10 mt-10 '
          />
        </motion.div>
      </div>
      <Scroll selector='#about' />
    </div>
  )
}

export default Header
