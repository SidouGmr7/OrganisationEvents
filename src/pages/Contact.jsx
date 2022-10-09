import { motion } from 'framer-motion'
import Button from './../components/Button'
import { useTranslation } from 'react-i18next'

export default function ContactMe() {
  const [t, i18n] = useTranslation()

  return (
    <div className='py-10 overflow-hidden scrollbar-hide'>
      <motion.div
        animate={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className='transition max-w-2xl md:mb-10 md:mt-10  my-20 m-auto p-8 space-x-4'
        id='contact'>
        <h1
          className={`first-letter:text-[#E50914] text-[#FFCC00] font-bold pb-6 text-xl md:text-4xl ${
            i18n.language === 'ar' && 'text-end'
          }`}>
          {t('about.contactp')}
        </h1>
        <Button
          Name={t('about.contact')}
          Selector=''
          BGC='  hover:bg-[#FFCC00] transition text-[#FFCC00] hover:text-white border-2 border border-[#FFCC00] text-white'
        />
      </motion.div>
    </div>
  )
}
