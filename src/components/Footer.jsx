import { motion } from 'framer-motion'
import LN from '../images/Logo.png'
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaChalkboardTeacher,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Footer() {
  const [t] = useTranslation()
  return (
    <footer className='overflow-hidden  bg-slate-900'>
      <div className='my-10 flex md:flex-row flex-col items-center relative max-w-6xl md:p-4 md:mx-auto gap-10'>
        <div className=' flex flex-col md:w-[50%] w-[87%] items-center space-y-6 gap-2'>
          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0, scale: 1 }}
            src={LN}
            alt='Logo'
            className='w-40 transition duration-1000'
          />
          <motion.p
            initial={{ x: -200 }}
            whileInView={{ x: 0, scale: 1 }}
            className='text-white text-justify md:gap-4 gap-16  transition duration-1000 flex flex-row'>
            <a href='' className='hover:scale-105 transition-all duration-300'>
              <FaTwitter
                className='md:text-[3rem] text-[2rem]'
                color='#1DA1F2'
              />
            </a>
            <a href='' className='hover:scale-105 transition-all duration-300'>
              <FaFacebook
                className='md:text-[3rem] text-[2rem]'
                color='#3b5998 '
              />
            </a>
            <a href='' className='hover:scale-105 transition-all duration-300'>
              <FaInstagram
                className='md:text-[3rem] text-[2rem]'
                color='#fd5949'
              />
            </a>
          </motion.p>
        </div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0, scale: 1 }}
          className='md:w-[50%] items-center transition duration-1000'>
          <p className='text-[#FFCC00] text-2xl mb-10 font-bold relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-1 before:bg-[#FFCC00]'>
            Liens Utiles
          </p>
          <Link to={'/seminairesinternational'}>
            <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
              <FaChalkboardTeacher color='#FFCC00' />
              <p className='text-white text-sm'>{t('titre.2')}</p>
            </div>
          </Link>
          <Link to={'/seminairesnationaux'}>
            <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
              <FaChalkboardTeacher color='#FFCC00' />
              <p className='text-white text-sm'>{t('titre.3')}</p>
            </div>
          </Link>
          <Link to={'/salonsinternational'}>
            <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
              <FaChalkboardTeacher color='#FFCC00' />
              <p className='text-white text-sm'>{t('titre.4')}</p>
            </div>
          </Link>
          <Link to={'/'}>
            <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
              <FaChalkboardTeacher color='#FFCC00' />
              <p className='text-white text-sm'>{t('titre.5')}</p>
            </div>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0, scale: 1 }}
          className='md:w-[50%] items-center transition duration-1000'>
          <p className='text-[#FFCC00] text-2xl mb-10 font-bold relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-1 before:bg-[#FFCC00]'>
            Contact
          </p>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <FaPhoneAlt color='#FFCC00' />
            <p className='text-white text-sm'>{t('titre.5')}</p>
          </div>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <FaPhoneAlt color='#FFCC00' />
            <p className='text-white text-sm'>{t('titre.5')}</p>
          </div>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <FaEnvelopeOpenText color='#FFCC00' />
            <p className='text-white text-sm'>{t('titre.5')}</p>
          </div>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <FaMapMarkedAlt color='#FFCC00' />
            <p className='text-white text-sm'>{t('titre.5')}</p>
          </div>
        </motion.div>
      </div>
      <div className=' bg-zinc-900 p-3 flex  md:flex-row text-xs flex-col justify-between'>
        <p className='text-zinc-400 mb-2 md:mb-0 mx-auto'>
          Copyright @ 2022 Boumerdes, DZ, inc All rights reserved .
        </p>
        <p className='text-zinc-400 mx-auto'>
          Réalisation & création par :{' '}
          <a href='https://portfolio-gmr.vercel.app/' className='font-bold'>
            Goumiri Ali
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
