import { motion } from 'framer-motion'
import NavbarItem from '../components/NavbarItem'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LN from '../images/Logo.png'
import { AiOutlineBars } from 'react-icons/ai'

const Navbar = () => {
  const [Langue, setLangue] = useState('fr')
  const [t, i18n] = useTranslation()
  const Seminaires = []
  const SalonsN = []

  for (var i = 1; i < 8; i++) {
    Seminaires.push(t('NSI1.' + i))
  }
  for (var i = 5; i < 18; i++) {
    SalonsN.push(t('Location.' + i))
  }
  const SalonsI = [t('NSI2.1')]
  const [Colapse, setColapse] = useState(false)
  return (
    <header className='fixed z-50 w-screen bg-slate-800 bg-opacity-30 backdrop-blur-sm p-1 '>
      <div className='md:flex items-center md:justify-between'>
        <div className='md:w-[12%] w-[40%] md:ml-3 md:mx-auto'>
          <img src={LN} alt='Logo' />
        </div>
        <AiOutlineBars
          className='ml-auto -mt-10 mb-4  text-[2rem] visible md:invisible text-slate-50'
          onClick={() => setColapse((prevStat) => !prevStat)}
        />
        <div
          className={`md:flex ${
            Colapse ? 'flex' : 'hidden'
          } items-center gap-8 mr-14`}>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex md:flex-row flex-col items-center mx-auto mt-10 gap-10'>
            <NavbarItem
              Name={t('Navbaritem.1')}
              Selector='/'
              Dropdown={false}
            />
            <NavbarItem
              Name={t('Navbaritem.2')}
              Selector='salons'
              Dropdown={true}
              N={SalonsN}
              I={SalonsI}
            />
            <NavbarItem
              Name={t('Navbaritem.3')}
              Selector='seminaires'
              Dropdown={true}
              N={Seminaires}
              I={Seminaires}
            />

            <button
              className='uppercase text-[#FFCC00] font-bold hover:text-[#E50914]'
              onClick={() => {
                if (Langue === 'fr') {
                  setLangue('ar')
                  i18n.changeLanguage('ar')
                } else {
                  setLangue('fr')
                  i18n.changeLanguage('fr')
                }
              }}>
              {Langue}
            </button>
          </motion.ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
