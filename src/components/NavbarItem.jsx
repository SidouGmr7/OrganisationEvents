import { useState } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

const NavbarItem = ({ Selector, Name, Dropdown, N, I }) => {
  const [menu, setmenu] = useState(false)
  const [t] = useTranslation()
  const Path = useLocation().pathname

  const underline =
    'before:absolute before:rounded-lg before:w-[40%] before:h-[13%] before:-bottom-0 before:bg-slate-200 hover:before:bg-[#FFCC00]'
  return (
    <ScrollIntoView selector={Selector}>
      <li className='relative'>
        {Dropdown ? (
          <button
            onClick={() => {
              setmenu((prevStat) => !prevStat)
            }}
            className={`flex items-center text-lg hover:scale-110 transition cursor-pointer hover:text-[#FFCC00] font-mono text-slate-50  ${
              (Selector === 'salons' &&
                (Path == '/salonsnationaux' ||
                  Path == '/salonsinternational')) ||
              (Selector === 'seminaires' &&
                (Path == '/seminairesnationaux' ||
                  Path == '/seminairesinternational'))
                ? underline
                : ''
            }`}>
            {Name}
            <MdOutlineArrowDropDown />
          </button>
        ) : (
          <Link
            to={Selector}
            className={`flex items-center text-lg hover:scale-110 transition cursor-pointer hover:text-[#FFCC00] font-mono text-slate-50 ${
              Selector === '/' && Path == '/' ? underline : ''
            }`}>
            {Name}
          </Link>
        )}
        {/* DropMenu*/}
        {menu && (
          <div className='w-96 backdrop-blur-lg bg-slate-600 bg-opacity-20 shadow-xl rounded-lg flex flex-col absolute top-14 -right-24 transition-all'>
            <Link
              to={Selector + 'nationaux'}
              onClick={() => setmenu(false)}
              className='font-bold py-3 px-[40%] text-sm hover:bg-slate-700  rounded-lg hover:bg-opacity-30 transition-all text-slate-400 hover:text-[#E50914]'>
              {t('Location.N')}
            </Link>
            <ul
              className='py-1 text-sm grid grid-cols-2 text-center'
              aria-labelledby='dropdownInformationButton'>
              {N.map((data) => {
                return (
                  <Link
                    to={Selector + 'nationaux'}
                    onClick={() => setmenu(false)}>
                    <li className='py-2 px-5 hover:bg-slate-700 rounded-lg hover:bg-opacity-30  transition-all text-slate-100 hover:text-[#FFCC00]'>
                      {data}
                    </li>
                  </Link>
                )
              })}
            </ul>
            <Link
              to={Selector + 'international'}
              onClick={() => setmenu(false)}
              className='font-bold py-3 px-[40%] text-sm hover:bg-slate-700 rounded-lg hover:bg-opacity-30  transition-all text-slate-400 hover:text-[#E50914]'>
              {t('Location.I')}
            </Link>
            <ul
              className={`py-1 text-sm grid  text-center ${
                Selector === 'salons' ? '' : 'grid-cols-2'
              }`}
              aria-labelledby='dropdownInformationButton'>
              {I.map((data) => {
                return (
                  <Link
                    to={Selector + 'international'}
                    onClick={() => setmenu(false)}>
                    <li className='py-2 px-6 hover:bg-slate-700 rounded-lg hover:bg-opacity-30  transition-all text-slate-100 hover:text-[#FFCC00]'>
                      {data}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>
        )}
      </li>
    </ScrollIntoView>
  )
}

export default NavbarItem
