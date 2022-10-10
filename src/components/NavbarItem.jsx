import { useState } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import DarkMode from '../context/DarkMode'

const NavbarItem = ({ Selector, Name, Dropdown, N, I, Colapse }) => {
  const [menu, setmenu] = useState(false)
  const [t] = useTranslation()
  const Path = useLocation().pathname

  const underline =
    'before:absolute before:rounded-lg before:w-[40%] before:h-[13%] before:-bottom-0 before:bg-slate-200 hover:before:text-slate-100 text-slate-100'
  return (
    <ScrollIntoView selector={Selector}>
      <li className='relative '>
        {Dropdown ? (
          <button
            onClick={() => {
              setmenu((prevStat) => !prevStat)
            }}
            onMouseEnter={() => {
              setmenu(true)
            }}
            onMouseLeave={() => {
              setmenu(false)
            }}
            className={`flex items-center md:text-lg text-md p-4 hover:scale-110 transition cursor-pointer hover:text-slate-100 font-mono text-[#FFCC00] ${
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
            {/* DropMenu*/}
            {menu && (
              <div className='z-20 md:w-96 w-72 backdrop-blur-lg bg-slate-600 hover:scale-95 bg-opacity-20 shadow-xl rounded-lg flex flex-col absolute md:top-14 -top-14  left-24 md:-left-32 transition-all'>
                <Link
                  to={Selector + 'nationaux'}
                  onClick={() => setmenu(false)}
                  className='font-bold py-3 px-[35%] hover:bg-slate-700 md:text-sm text-xs rounded-lg hover:bg-opacity-30 transition-all text-slate-400 hover:text-[#E50914]'>
                  {t('Location.N')}
                </Link>
                <ul
                  className='py-1 grid md:grid-cols-2 grid-cols-3 text-center'
                  aria-labelledby='dropdownInformationButton'>
                  {N.map((data) => {
                    return (
                      <Link
                        to={Selector + 'nationaux'}
                        onClick={() => setmenu(false)}>
                        <li className='py-2 px-5 hover:bg-slate-700 rounded-lg md:text-sm text-xs hover:bg-opacity-30 md:text-md transition-all text-slate-100 hover:text-[#FFCC00]'>
                          {data}
                        </li>
                      </Link>
                    )
                  })}
                </ul>
                <Link
                  to={Selector + 'international'}
                  onClick={() => setmenu(false)}
                  className='font-bold py-3 px-[30%] hover:bg-slate-700 rounded-lg md:text-sm text-xs hover:bg-opacity-30  transition-all text-slate-400 hover:text-[#E50914]'>
                  {t('Location.I')}
                </Link>
                <ul
                  className={`py-1 grid  text-center ${
                    Selector === 'salons' ? '' : 'md:grid-cols-2 grid-cols-3'
                  }`}
                  aria-labelledby='dropdownInformationButton'>
                  {I.map((data) => {
                    return (
                      <Link
                        to={Selector + 'international'}
                        onClick={() => setmenu(false)}>
                        <li className='py-2 px-6 hover:bg-slate-700 rounded-lg hover:bg-opacity-30 md:text-sm text-xs  transition-all text-slate-100 hover:text-[#FFCC00]'>
                          {data}
                        </li>
                      </Link>
                    )
                  })}
                </ul>
              </div>
            )}
          </button>
        ) : (
          <Link
            to={Selector}
            className={`flex items-center md:text-lg text-md text-[#FFCC00] hover:scale-110 transition cursor-pointer hover:text-slate-100 font-mono  ${
              Selector === '/' && Path == '/' ? underline : ''
            }`}>
            {Name}
          </Link>
        )}
      </li>
    </ScrollIntoView>
  )
}

export default NavbarItem
