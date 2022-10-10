import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import SemitaireI from '../images/SemitaireI.jpg'
import SemitaireN from '../images/SemitaireN.jpg'
import SalonN from '../images/SalonN.jpg'
import SalonI from '../images/SalonI.JPG'

function Mission() {
  const [t] = useTranslation()
  const Section = ({ titre, desc, image, style, location }) => {
    return (
      <div
        className={`md:p-28 p-14 md:gap-20 md:flex ${style} md:items-center`}>
        <motion.div
          animate={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='md:w-[50%] flex flex-col items-center transition duration-1000'>
          <Link to={location} className='relative'>
            <img
              src={image}
              alt=''
              className='rounded-full scale-125 opacity-80 hover:opacity-100 transition-all duration-500 md:mb-0 mb-32'
            />
            <Link
              to={location}
              className='absolute top-1/4 left-[3%] bg-slate-700 bg-opacity-30 backdrop-blur-sm p-1 rounded-full visible md:invisible text-[#E50914] font-bold uppercase text-xl'>
              {titre}
            </Link>
          </Link>
          <div className='flex md:hidden text-center -mt-16  text-[#FFCC00] p-4 bg-slate-700 bg-opacity-30 rounded-[20%] capitalize font-bold '>
            <p className='pl-3'>{desc}</p>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='md:flex flex-col hidden md:w-[60%] items-center transition duration-500'>
          <div className=' md:flex md:flex-col items-center text-center md:gap-6'>
            <Link
              to={location}
              className='md:text-[#E50914] font-bold uppercase text-3xl relative before:absolute before:rounded-lg before:w-14 before:h-1 before:-bottom-1 before:bg-[#E50914]'>
              {titre}
            </Link>
            <div className=' text-[#FFCC00] text-center capitalize text-2xl md:w-[60%] font-bold space-y-4'>
              {desc}
            </div>
          </div>
        </motion.div>
      </div>
    )
  }
  return (
    <div
      className='relative overflow-hidden scrollbar-hide bg-slate-900 bg-opacity-95 py-20'
      id='mission'>
      <p className='uppercase text-slate-300  text-2xl md:text-4xl font-bold text-center pt-4 md:mb-10 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-1 before:bg-slate-300'>
        {t('mission.titre')}
      </p>
      <Section
        titre={t('HomeSection.1.titre')}
        desc={t('HomeSection.1.desc')}
        image={SemitaireI}
        style='md:flex-row'
        location='seminairesinternational'
      />
      <Section
        titre={t('HomeSection.2.titre')}
        desc={t('HomeSection.2.desc')}
        image={SemitaireN}
        style='md:flex-row-reverse'
        location='seminairesnationaux'
      />
      <Section
        titre={t('HomeSection.3.titre')}
        desc={t('HomeSection.3.desc')}
        image={SalonI}
        style='md:flex-row'
        location='salonsinternational'
      />
      <Section
        titre={t('HomeSection.4.titre')}
        desc={t('HomeSection.4.desc')}
        image={SalonN}
        style='md:flex-row-reverse'
        location='salonsnationaux'
      />
    </div>
  )
}

export default Mission
