import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import ContactMe from './Contact'
import { useLocation } from 'react-router-dom'
import BG from '../images/bg2.jpg'
import Dubai from '../images/dubai.jpg'
import Suisse from '../images/suisse.jpg'
import Germany from '../images/Germany.jpg'
import UK from '../images/UK.jpg'
import Oran from '../images/Oran.jpg'
import Alger from '../images/Alger.jpg'
import Tizi from '../images/Tizi.JPG'
import Blida from '../images/Blida.jpg'

const Seminaire = () => {
  const [t] = useTranslation()
  const Path = useLocation().pathname

  const Section = ({ titre, desc, img }) => {
    return (
      <div className='flex flex-row py-10'>
        <motion.div
          animate={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='flex flex-col items-center space-y-5 relative transition duration-1000'>
          <img
            src={img[1]}
            alt=''
            className='h-[50%] w-[80%] object-cover rounded-t-full'
          />
          <header className='absolute text-2xl text-[#E50914]  backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-3 top-1/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
            {titre[1]}
          </header>
          <p className='text-[#FFCC00] text-lg text-center backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-4'>
            {desc[0]}
          </p>
        </motion.div>
        <motion.div
          animate={{ y: -200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className='p-10 transition duration-1000'>
          <div className='relative'>
            <img src={img[0]} alt='' className='hover:blur-[1px] blur-none transition-all duration-500 rounded-full scale-110' />
            <h1 className='absolute text-2xl text-[#E50914]  backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-3 top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
              {titre[0]}
            </h1>
          </div>
        </motion.div>
        {img[2] && (
          <motion.div
            animate={{ x: 400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className='flex flex-col items-center space-y-5 relative transition duration-1000'>
            <img
              src={img[2]}
              alt=''
              className='h-[50%] w-[80%] object-cover rounded-t-full'
            />
            <header className='absolute text-2xl text-[#E50914] backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-3 top-1/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
              {titre[2]}
            </header>
            <p className='text-[#FFCC00] text-lg text-center backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-4'>
              {desc[1]}
            </p>
          </motion.div>
        )}
      </div>
    )
  }
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className='h-96 flex  items-center justify-center ml-4  transition duration-1000'>
        <p className=' md:text-5xl text-4xl font-bold capitalize text-[#FFCC00] first-letter:text-[#E50914]'>
          {Path === '/seminairesinternational' ? t('titre.2') : t('titre.3')}
        </p>
      </motion.div>
      <div className='overflow-hidden scrollbar-hide  bg-slate-900 p-20'>
        <Section
          img={[Path === '/seminairesinternational' ? Dubai : Oran, BG, BG]}
          titre={[
            Path === '/seminairesinternational'
              ? t('Location.1')
              : t('Location.5'),
            t('NSI1.1'),
            t('NSI1.2'),
          ]}
          desc={[t('PSI1.1'), t('PSI1.2')]}
        />
        <Section
          img={[Path === '/seminairesinternational' ? Suisse : Alger, BG, BG]}
          titre={[
            Path === '/seminairesinternational'
              ? t('Location.2')
              : t('Location.6'),
            t('NSI1.3'),
            t('NSI1.4'),
          ]}
          desc={[t('PSI1.1'), t('PSI1.2')]}
        />
        <Section
          img={[Path === '/seminairesinternational' ? UK : Oran, BG]}
          titre={[
            Path === '/seminairesinternational'
              ? t('Location.3')
              : t('Location.5'),
            t('NSI1.5'),
          ]}
          desc={[t('PSI1.1'), t('PSI1.2')]}
        />
        <Section
          img={[Path === '/seminairesinternational' ? Germany : Alger, BG, BG]}
          titre={[
            Path === '/seminairesinternational'
              ? t('Location.4')
              : t('Location.6'),
            t('NSI1.6'),
            t('NSI1.7'),
          ]}
          desc={[t('PSI1.1'), t('PSI1.2')]}
        />
      </div>
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Seminaire
