import Button from './Button'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Scroll from './Scroll'
import LN from '../images/LogoName.png'

const About = () => {
  const [t, i18n] = useTranslation()
  return (
    <div
      className='relative py-20 overflow-hidden scrollbar-hide bg-slate-900 bg-opacity-80 h-screen'
      id='about'>
      <header className='first-letter:text-[#E50914] flex flex-col items-center text-[#FFCC00] text-2xl md:text-6xl '>
        <img src={LN} alt='' className='w-[50%]' />
      </header>

      <div className='flex md:flex-row flex-col items-center md:mt-20 mt-8 mb-20 gap-10 md:gap-0'>
        <motion.div
          animate={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='w-[50%] flex flex-col items-center ml-4 mb-32 transition duration-500'>
          <div>
            <p className='text-slate-700 font-bold uppercase text-xs relative before:absolute before:rounded-lg before:w-12 before:h-[15%] before:-bottom-1 before:bg-slate-700'>
              {t('about.contact')}
            </p>
            <div className='text-[#FFCC00] capitalize text-6xl font-bold w-72 pt-4'>
              <p className='text-4xl md:text-6xl first-letter:text-[#E50914]'>
                {t('about.propre')}
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='md:w-[50%] flex flex-col items-center md:ml-4 -mt-36 transition duration-1000'>
          <p
            className={`text-[#FFCC00] font-bold  pb-6 md:text-xl text-md text-justify w-[82%]  ${
              i18n.language === 'ar' && 'text-end'
            }   `}>
            {t('about.desc.1')} <br />
            {t('about.desc.2')}
          </p>
          <Button
            Name={t('about.contact')}
            Selector='#service'
            BGC='hover:bg-[#FFCC00] text-white border-2 border border-[#FFCC00]'
          />
        </motion.div>
      </div>
      <Scroll selector='#mission' />
    </div>
  )
}

export default About
