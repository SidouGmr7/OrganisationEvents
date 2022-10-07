import { motion } from 'framer-motion'
import BG from '../images/bg2.jpg'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Mission() {
  const [t] = useTranslation()
  const Section = ({ titre, desc, image, style , location }) => {
    return (
      <div className={`md:flex ${style} md:items-center`}>
        <motion.div
          animate={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='md:w-[50%] flex flex-col items-center transition duration-1000'>
          <Link to={location} className='visible md:invisible text-[#E50914] font-bold uppercase text-3xl relative before:absolute before:rounded-lg before:w-14 before:h-1 before:-bottom-1 before:bg-[#E50914] mb-10'>
            {titre}
          </Link>
          <Link to={location}>
            <img
              src={image}
              alt=''
              className='rounded-full opacity-70 md:mb-32'
            />
          </Link>
          <div className='visible md:invisible z-20 -mt-48 ml-4 text-[#FFCC00] bg-slate-700 bg-opacity-30 rounded-full py-6 capitalize w-[60%] font-semibold space-y-4'>
            <p className='pl-3'>{desc}</p>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='invisible md:visible md:w-[50%] flex flex-col items-center ml-4 transition duration-500'>
          <div className=' md:flex md:flex-col items-center text-center md:gap-6'>
            <Link to={location} className='md:text-[#E50914] font-bold uppercase text-3xl relative before:absolute before:rounded-lg before:w-14 before:h-1 before:-bottom-1 before:bg-[#E50914]'>
              {titre}
            </Link>
            <div className=' text-[#FFCC00] capitalize text-2xl md:w-[60%] font-bold space-y-4'>
              {desc}
            </div>
          </div>
        </motion.div>
      </div>
    )
  }
  return (
    <div className='overflow-hidden scrollbar-hide  bg-slate-900 pb-20'>
      <p className='uppercase text-slate-300  text-2xl md:text-4xl font-bold text-center pt-4 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-slate-300'>
        Les Séminaires et Les Salons
      </p>
      <Section
        titre={t('HomeSection.1.titre')}
        desc={t('HomeSection.1.desc')}
        image={BG}
        style='md:flex-row'
        location='seminairesinternational'
      />
      <Section
        titre={t('HomeSection.2.titre')}
        desc={t('HomeSection.2.desc')}
        image={BG}
        style='md:flex-row-reverse'
        location='seminairesnationaux'

      />
      <Section
        titre={t('HomeSection.3.titre')}
        desc={t('HomeSection.3.desc')}
        image={BG}
        style='md:flex-row'
        location='salonsinternational'

      />
      <Section
        titre={t('HomeSection.4.titre')}
        desc={t('HomeSection.4.desc')}
        image={BG}
        style='md:flex-row-reverse'
        location='salonsnationaux'

      />
    </div>
  )
}

export default Mission
