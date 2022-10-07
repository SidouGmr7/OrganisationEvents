import { motion } from 'framer-motion'
import NavbarItem from '../components/NavbarItem'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [Langue, setLangue] = useState('fr')
  const [t, i18n] = useTranslation()

  const Semina = [
    t('NSI1.1'),
    t('NSI1.2'),
    t('NSI1.3'),
    t('NSI1.4'),
    t('NSI1.5'),
    t('NSI1.6'),
    t('NSI1.7'),
  ]
  const SalonsN = [t('NSI2.1')]
  const SalonsI = [t('NSI2.2')]

  return (
    <header className='fixed z-50 w-screen bg-slate-800 bg-opacity-30 backdrop-blur-sm p-1 '>
      <div className='md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center justify-center'>
          <div className='flex items-center gap-2'>
            <p className='md:text-xl'>
              <img
                src='https://digitalmarketingdz.com/wp-content/uploads/2022/09/new-logo-blanc-02.png'
                alt='Logo'
                className='w-40 ml-10'
              />
            </p>
          </div>
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
              N={Semina}
              I={Semina}
            />
            <NavbarItem
              Name={t('Navbaritem.4')}
              Selector='#service'
              Dropdown={false}
            />
            <button
              className='uppercase text-[#FFCC00] hover:text-[#E50914]'
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
