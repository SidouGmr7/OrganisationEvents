import Button from './Button'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Scroll from './Scroll'
import LN from '../images/LogoName.PNG'

const About = () => {
  const [t, i18n] = useTranslation()
  return (
    <div
      className='relative py-20 overflow-hidden scrollbar-hide bg-slate-900 h-screen'
      id='about'>
      <header className='first-letter:text-[#E50914] flex flex-col items-center text-[#FFCC00] text-2xl md:text-6xl '>
        <img src={LN} alt="" className='w-[50%]' />
      </header>

      <div className='flex md:flex-row flex-col items-center mt-20 mb-20 gap-10 md:gap-0'>
        <motion.div
          animate={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='w-[50%] flex flex-col items-center ml-4 transition duration-500'>
          <div>
            <p className='text-[#E50914] font-bold uppercase text-xs relative before:absolute before:rounded-lg before:w-12 before:h-[15%] before:-bottom-1 before:bg-[#E50914]'>
              {t('about.contact')}
            </p>
            <div className='text-[#FFCC00] capitalize text-6xl font-bold w-72 pt-4'>
              <p className='text-4xl md:text-6xl'> {t('about.propre')}</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='md:w-[50%] flex flex-col items-center ml-4 transition duration-1000'>
          <p
            className={`text-slate-100  pb-6 md:text-xl text-justify w-[82%]  ${
              i18n.language === 'ar' && 'text-end'
            }  font-black `}>
            {t('about.desc.1')} <br />
            {t('about.desc.2')}
          </p>
          <Button
            Name='SAVOIR PLUS'
            Selector='#service'
            BGC='bg-[#FFCC00] text-slate-900'
          />
        </motion.div>
      </div>
      <Scroll selector='#mission' />
    </div>
  )
}

export default About
