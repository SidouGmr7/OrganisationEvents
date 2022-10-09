import { motion } from 'framer-motion'
import NavbarItem from '../components/NavbarItem'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LN from '../images/Logo.png'

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

  return (
    <header className='fixed z-50 w-screen bg-slate-800 bg-opacity-30 backdrop-blur-sm p-1 '>
      <div className='md:flex w-full h-full items-center justify-between'>
        <div className='w-[12%] ml-3'>
          <img src={LN} alt='Logo' />
        </div>
        <div className='md:flex hidden items-center gap-8 mr-14'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-10'>
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
            <NavbarItem
              Name={t('Navbaritem.4')}
              Selector='#contact'
              Dropdown={false}
            />
            <button
              className='uppercase text-[#FFCC00]  font-bold hover:text-[#E50914]'
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
