import Scroll from '../components/Scroll'
import { AiFillAliwangwang, AiFillCar } from 'react-icons/ai'
import { GiStaticGuard } from 'react-icons/gi'
import { FaHotel } from 'react-icons/fa'
import { MdOutlineFastfood, MdHotel } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const [t] = useTranslation()
  const style =
    'flex flex-col items-center backdrop-blur-lg w-[70%] md:w-full mx-auto bg-slate-600 bg-opacity-20 shadow-xl p-4 rounded-3xl md:border-l-8 border-l-4 md:hover:scale-105 transition-all duration-500 border-[#FFCC00]'

  return (
    <div className='py-10 overflow-hidden scrollbar-hide bg-slate-900 bg-opacity-80'>
      <div
        className='relative max-w-4xl lg:h-screen mx-auto  py-28'
        id='service'>
        <p className='uppercase text-slate-300  text-2xl md:text-4xl font-bold text-center pt-4 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-slate-300'>
          Nos Services
        </p>
        <div className='grid lg:grid-cols-3 grid-cols-2 justify-center pt-10 gap-8 '>
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={style}>
            <FaHotel className='text-4xl text-[#FFCC00]' />
            <header className='mt-4 text-[#FFCC00] md:text-xl text-sm text-center'>
              {t('service.1')}
            </header>
          </motion.div>
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={style}>
            <MdHotel className='text-4xl text-[#FFCC00]' />
            <header className='mt-4 text-[#FFCC00] md:text-xl text-sm text-center'>
              {t('service.2')}
            </header>
          </motion.div>
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={style}>
            <GiStaticGuard className='text-4xl text-[#FFCC00]' />
            <header className='mt-4 text-[#FFCC00] md:text-xl text-sm text-center'>
              {t('service.3')}
            </header>
          </motion.div>
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={style}>
            <MdOutlineFastfood className='text-4xl text-[#FFCC00]' />
            <header className='mt-4 text-[#FFCC00] md:text-xl text-sm text-center'>
              {t('service.4')}
            </header>
          </motion.div>

          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className={style}>
            <AiFillCar className='text-4xl text-[#FFCC00]' />
            <header className='mt-4 text-[#FFCC00] md:text-xl text-sm text-center'>
              {t('service.5')}
            </header>
          </motion.div>
        </div>
        <Scroll selector='#agenda' />
      </div>
    </div>
  )
}

export default Services
