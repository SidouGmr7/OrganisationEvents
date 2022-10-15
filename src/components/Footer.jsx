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
  FaWhatsapp,
} from 'react-icons/fa'
import { GiRotaryPhone } from 'react-icons/gi'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Footer() {
  const [t] = useTranslation()
  return (
    <footer className='overflow-hidden  bg-slate-900'>
      <div className='my-10 flex md:flex-row flex-col items-center relative justify-center w-[75%] md:w-[90%]   md:p-4 mx-auto gap-10'>
        <div className='flex flex-col md:w-[50%] items-center space-y-6 gap-2'>
          <motion.img
            initial={{ x: 200 }}
            whileInView={{ x: 0, scale: 1 }}
            src={LN}
            alt='Logo'
            className='w-40 transition duration-1000'
          />
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0, scale: 1 }}
            className='text-white text-justify md:gap-4 gap-12  transition duration-1000 flex flex-row'>
            <a href='https://twitter.com/SPACAPMER' className='hover:scale-105 transition-all duration-300'>
              <FaTwitter
                className='md:text-[3rem] text-[2rem]'
                color='#1DA1F2'
              />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100085440456181'
              className='hover:scale-105 transition-all duration-300'>
              <FaFacebook
                className='md:text-[3rem] text-[2rem]'
                color='#3b5998 '
              />
            </a>
            <a
              href='https://www.instagram.com/abouzinne/'
              className='hover:scale-105 transition-all duration-300'>
              <FaInstagram
                className='md:text-[3rem] text-[2rem]'
                color='#fd5949'
              />
            </a>
            <a
              href='tel:0664784130'
              className='hover:scale-105 transition-all duration-300'>
              <FaWhatsapp
                className='md:text-[3rem] text-[2rem]'
                color='#25d366'
              />
            </a>
          </motion.div>
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
            <a href='tel:0775310312' className='text-white text-sm'>
              +213 (0)775310312
            </a>
          </div>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <FaPhoneAlt color='#FFCC00' />
            <a href='tel:0658444412' className='text-white text-sm'>
              +213 (0)658444412
            </a>
          </div>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <GiRotaryPhone color='#FFCC00' />
            <a href='tel:024775855' className='text-white text-sm'>
              +213 (0)24775855
            </a>
          </div>

          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <FaEnvelopeOpenText color='#FFCC00' />
            <p className='text-white text-sm'>
              <a href='mailto:bnhmdanrhal@gamil.com'>bnhmdanrhal@gamil.com</a>
            </p>
          </div>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <FaMapMarkedAlt color='#FFCC00' />
            <p className='text-white text-sm'>
              {' '}
              35024 Ouled Bonoua Cap Djinet Boumerdes
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0, scale: 1 }}
          className='md:w-[50%] items-center transition duration-1000'>
          <p className='text-[#FFCC00] text-2xl mb-10 font-bold relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-1 before:bg-[#FFCC00]'>
            Bureaux de Représentation
          </p>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <HiOutlineOfficeBuilding color='#FFCC00' />
            <a
              href='https://maps.app.goo.gl/S7Bet3Mrckgju4H16?g_st=iw'
              className='text-white text-sm'>
              Centre Commercial Bab Ezzouar (Regus)
            </a>
          </div>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <HiOutlineOfficeBuilding color='#FFCC00' />
            <a
              href='https://maps.app.goo.gl/jXWohprPpbCxMtcF7?g_st=iw'
              className='text-white text-sm'>
              Centre Commercial Dubai (Regus)
            </a>
          </div>
          <div className='text-xl m-4 rounded-full hover:text-white transition duration-1000  flex gap-4'>
            <HiOutlineOfficeBuilding color='#FFCC00' />
            <a
              href='https://maps.app.goo.gl/Ch6L6oGhCZ81pW8m8?g_st=iw'
              className='text-white text-sm'>
              Centre Commercial Luxembourg (Regus)
            </a>
          </div>
        </motion.div>
      </div>
      <div className=' bg-zinc-900 p-3 flex  md:flex-row text-xs flex-col justify-between'>
        <p className='text-zinc-400 mb-2 md:mb-0 mx-auto'>
          Copyright @ 2022 Boumerdes, DZ, inc All rights reserved .
        </p>
        <p className='text-zinc-400 mx-auto'>
          Réalisation & création par :{' '}
          <a href='https://portfolio-gmr.vercel.app/' className='font-bold text-md'>
            Goumiri Ali
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
