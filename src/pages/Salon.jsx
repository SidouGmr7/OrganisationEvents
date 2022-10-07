import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import BG from '../images/bg2.jpg'
import Footer from '../components/Footer'
import ContactMe from './Contact'
import { useLocation } from 'react-router-dom'

const Salon = () => {
  const [t] = useTranslation()
  const Path = useLocation().pathname
  const SectionBoll = ({ titre, BG, style }) => {
    return (
      <div className={`absolute ${style}`}>
        <motion.div
          animate={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='flex flex-col items-center space-y-5 relative transition duration-1000'>
          <img src={BG} alt='' className='object-cover rounded-full'  />
          <header className='absolute text-xl text-[#E50914] font-bold backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-3 top-1/3 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
            {titre}
          </header>
        </motion.div>
      </div>
    )
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className='h-96 flex items-center justify-center ml-4  transition duration-1000'>
        <p className=' md:text-5xl text-4xl font-bold capitalize text-[#FFCC00] first-letter:text-[#E50914]'>
          {Path === '/salonsinternational' ? t('titre.4') : t('titre.5')}
        </p>
      </motion.div>
      {Path === '/salonsnationaux' ? (
        <div className='relative overflow-hidden scrollbar-hide flex flex-col justify-center items-center bg-slate-900 h-screen'>
          <motion.div
            animate={{ x: -400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className='items-center space-y-5 w-[50%] relative transition duration-1000 mt-10'>
            <img
              src={BG}
              alt=''
              className='h-[50%] w-full object-cover rounded-t-full'
            />
            <header className='absolute text-2xl text-[#E50914] font-bold backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-3 top-1/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
              {t('NSI2.2')}
            </header>
            <p className='text-[#FFCC00] text-lg text-center backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-4'>
              {t('NSI2.1')}
            </p>
          </motion.div>
          <SectionBoll titre={t('Location.6')} BG={BG} style={'left-[5%] top-[5%] w-[22%]'}/>
          <SectionBoll titre={t('Location.5')} BG={BG} style={'right-[5%] top-[5%] w-[22%]'}/>
          <SectionBoll titre={t('Location.12')} BG={BG} style={'right-[5%] top-[37%] w-[17%]'}/>
          <SectionBoll titre={t('Location.17')} BG={BG} style={'left-[5%] top-[37%] w-[17%]'}/>
          
          <p className='absolute left-[5%] bottom-[15%] bg-slate-200 p-4 rounded-full text-[#FFCC00] bg-opacity-10 text-xl'>{t('Location.14')}</p>
          <p className='absolute left-[5%] bottom-[25%] bg-slate-200 p-4 rounded-full text-[#FFCC00] bg-opacity-10 text-xl'>{t('Location.15')}</p>
          <p className='absolute left-[12%] bottom-[15%] bg-slate-200 p-4 rounded-full text-[#FFCC00] bg-opacity-10 text-xl'>{t('Location.10')}</p>
          <p className='absolute left-[12%] bottom-[25%] bg-slate-200 p-4 rounded-full text-[#FFCC00] bg-opacity-10 text-xl'>{t('Location.9')}</p>
          <p className='absolute right-[5%] bottom-[15%] bg-slate-200 p-4 rounded-full text-[#FFCC00] bg-opacity-10 text-xl'>{t('Location.13')}</p>
          <p className='absolute right-[5%] bottom-[25%] bg-slate-200 p-4 rounded-full text-[#FFCC00] bg-opacity-10 text-xl'>{t('Location.11')}</p>
          <p className='absolute right-[14.2%] bottom-[15%] bg-slate-200 p-4 rounded-full text-[#FFCC00] bg-opacity-10 text-xl'>{t('Location.7')}</p>
          <p className='absolute right-[12%] bottom-[5%] bg-slate-200 p-4 rounded-full text-[#FFCC00] bg-opacity-10 text-xl'>{t('Location.8')}</p>
          <p className='absolute right-[5%] bottom-[5%] bg-slate-200 p-4 rounded-full text-[#FFCC00] bg-opacity-10 text-xl'>{t('Location.16')}</p>

        </div>
      ) : (
        <></>
        )}
      <ContactMe />
      <Footer />
    </>
  )
}

export default Salon
