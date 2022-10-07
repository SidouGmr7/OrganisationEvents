import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import BG from '../images/bg2.jpg'

const SeminaireN = ({ Path }) => {
  const [t, i18n] = useTranslation()
  const Section = ({ titre, desc, img, style }) => {
    return (
      <div className='flex flex-row py-10'>
        <motion.div
          animate={{ x: -400, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='flex flex-col items-center space-y-5 relative transition duration-1000'>
          <img
            src={img[1]}
            className='h-[50%] w-full object-cover rounded-t-full'
          />
          <header className='absolute text-2xl text-[#E50914] font-bold backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-3 top-1/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
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
          <div class='relative'>
            <img src={img[0]} className='rounded-full scale-110' />
            <h1 class='absolute text-2xl text-[#E50914] font-bold backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-3 top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
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
              className='h-[50%] w-full object-cover rounded-t-full'
            />
            <header className='absolute text-2xl text-[#E50914] font-bold backdrop-blur-sm bg-slate-600 bg-opacity-20 rounded-full p-3 top-1/4 left-1/2 text-center -translate-x-1/2 -translate-y-1/2'>
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
    <div className='overflow-hidden scrollbar-hide  bg-slate-900 p-20'>
      <Section
        img={[Path === '/seminairesinternational' ? BG : BG, BG, BG]}
        titre={[
          Path === '/seminairesinternational' ? t('Location.1') : t('Location.5'),
          t('NSI1.1'),
          t('NSI1.2'),
        ]}
        desc={[t('PSI1.1'), t('PSI1.2')]}
      />
      <Section
        img={[Path === '/seminairesinternational' ? BG : BG, BG, BG]}
        titre={[
          Path === '/seminairesinternational' ? t('Location.2') : t('Location.6'),
          t('NSI1.3'),
          t('NSI1.4'),
        ]}
        desc={[t('PSI1.1'), t('PSI1.2')]}
      />
      <Section
        img={[Path === '/seminairesinternational' ? BG : BG, BG]}
        titre={[
          Path === '/seminairesinternational' ? t('Location.3') : t('Location.5'),
          t('NSI1.5'),
        ]}
        desc={[t('PSI1.1'), t('PSI1.2')]}
      />
      <Section
        img={[Path === '/seminairesinternational' ? BG : BG, BG, BG]}
        titre={[
          Path === '/seminairesinternational' ? t('Location.4') : t('Location.6'),
          t('NSI1.6'),
          t('NSI1.7'),
        ]}
        desc={[t('PSI1.1'), t('PSI1.2')]}
      />
    </div>
  )
}

export default SeminaireN
