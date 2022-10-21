import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import ContactMe from './Contact'
import { useLocation } from 'react-router-dom'

import Dubai from '../images/dubai.jpg'
import Suisse from '../images/suisse.jpg'
import Germany from '../images/Germany.jpg'
import Artisanat from '../images/Artisanat.jpeg'
import UK from '../images/UK.jpg'
import Oran from '../images/Oran.jpg'
import Alger from '../images/Alger.jpg'
import Tizi from '../images/Tizi.JPG'
import Blida from '../images/Blida.jpg'

const Salon = () => {
  const [t] = useTranslation()
  const Path = useLocation().pathname
  const style = 'text-center md:absolute bg-slate-200 md:p-4 p-2 rounded-full text-[#FFCC00] bg-opacity-10 md:text-xl text-sm'
  const SectionBoll = ({ titre, BG, style }) => {
    return (
      <div className={`md:absolute ${style}`}>
        <motion.div
          animate={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='flex md:flex-col items-center md:space-y-5 relative transition duration-1000'>
          <img src={BG} alt='' className='object-cover rounded-full'  />
          <header className='absolute md:text-xl text-xs text-[#E50914] backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full md:p-3 p-1 top-[37%] left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
            {titre}
          </header>
        </motion.div>
      </div>
    )
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className='h-96 flex items-center justify-center ml-4  transition duration-1000'>
        <p className=' md:text-5xl text-4xl  font-bold capitalize text-[#FFCC00] first-letter:text-[#E50914]'>
          {Path === '/salonsinternational' ? t('titre.4') : t('titre.5')}
        </p>
      </motion.div>
        <div className='relative overflow-hidden scrollbar-hide flex flex-col justify-center items-center bg-slate-900 md:h-screen'>
          <motion.div
            animate={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className='items-center space-y-5 md:w-[50%] w-[90%]  relative transition duration-1000 mt-10'>
            <img
              src={Artisanat}
              alt=''
              className='h-[60%] -mt-10 w-full object-cover rounded-t-full'
              />
            <header className='absolute text-2xl text-[#E50914] backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-3 top-1/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
              {Path === '/salonsnationaux' ? t('NSI2.2') : t('NSI2.1')}
            </header>
            <p className='text-[#FFCC00] text-lg text-center backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-4'>
            {Path === '/salonsnationaux' ? t('NSI2.2') : t('NSI2.1')}
            </p>
          </motion.div>
          {Path === '/salonsnationaux' ? (<>
         <div className="grid grid-cols-2 items-center gap-4 md:gap-0 md:mt-0 mt-5 p-4 md:p-0">
          <SectionBoll titre={t('Location.6')} BG={Alger} style={'md:left-[5%] md:top-[5%] md:w-[22%] w-[100%]'}/>
          <SectionBoll titre={t('Location.5')} BG={Oran} style={'md:right-[5%] md:top-[5%] md:w-[22%] w-[100%]'}/>
          <SectionBoll titre={t('Location.13')} BG={Tizi} style={'md:right-[5%] md:top-[37%] md:w-[17%] md:w-[22%] w-[100%]'}/>
          <SectionBoll titre={t('Location.17')} BG={Blida} style={'md:left-[5%] md:top-[40%] md:w-[17%] md:w-[22%] w-[100%]'}/>
          
          </div>
          <div className='grid grid-cols-4 p-4 gap-4 items-center'>
          <p className={`left-[5%] bottom-[25%] ${style}`}>{t('Location.11')}</p>
          <p className={`left-[18%] bottom-[25%] ${style}`}>{t('Location.15')}</p>
          <p className={`left-[25%] bottom-[25%] ${style}`}>{t('Location.10')}</p>
          <p className={`left-[32%] bottom-[25%] ${style}`}>{t('Location.9')}</p>
          <p className={`right-[5%] bottom-[25%] ${style}`}>{t('Location.12')}</p>
          <p className={`right-[18%] bottom-[25%] ${style}`}>{t('Location.14')}</p>         
          <p className={`right-[25%] bottom-[25%] ${style}`}>{t('Location.7')}</p>         
          <p className={`right-[32%] bottom-[25%] ${style}`}>{t('Location.8')}</p>
          <p className={`right-[40%] bottom-[25%] ${style}`}>{t('Location.16')}</p>
          <p className={`right-[48.5%] bottom-[25%] ${style}`}>{t('Location.18')}</p>
          </div>
          </>
          ) : (
        <div className="grid grid-cols-2 items-center gap-4 md:gap-0 md:mt-0 mt-5 p-4 md:p-0">          
          <SectionBoll titre={t('Location.1')} BG={Dubai} style={'md:left-[5%] md:top-[5%] md:w-[22%] w-[100%]'}/>
          <SectionBoll titre={t('Location.2')} BG={Suisse} style={'md:right-[5%] md:top-[5%] md:w-[22%] w-[100%]'}/>
          <SectionBoll titre={t('Location.3')} BG={Germany} style={'md:right-[2%] md:top-[50%] md:w-[22%] w-[100%]'}/>
          <SectionBoll titre={t('Location.4')} BG={UK} style={'md:left-[2%] md:top-[50%] md:w-[22%] w-[100%]'}/>          
         </div>
            )}
       </div>
      <ContactMe />
      <Footer />
    </>
  )
}

export default Salon