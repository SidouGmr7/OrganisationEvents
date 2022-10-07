import { useState } from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'

const NavbarItem = ({ Selector, Name, Dropdown, N, I }) => {
  const [menu, setmenu] = useState(false)
  return (
    <ScrollIntoView selector={Selector}>
      <li className='relative'>
        {Dropdown ? (
          <button
            onClick={() => {
              setmenu((prevStat) => !prevStat)
            }}
            className='flex items-center text-lg hover:scale-110 transition cursor-pointer hover:text-[#FFCC00] text-slate-200'>
            {Name}
            <MdOutlineArrowDropDown />
          </button>
        ) : (
          <Link
            to={Selector}
            className='text-lg hover:scale-110 transition cursor-pointer hover:text-[#FFCC00] text-slate-200'>
            {Name}
          </Link>
        )}

        {menu && (
          <div className='w-80 backdrop-blur-lg bg-slate-600 bg-opacity-20 shadow-xl rounded-lg flex flex-col absolute top-14 -right-24 transition-all'>
            <Link
              to={Selector + 'nationaux'}
              className='font-medium py-3 px-[40%] text-sm hover:bg-slate-600 hover:bg-opacity-50   transition-all text-slate-400 hover:text-[#E50914]'>
              National
            </Link>
            <ul
              className='py-1 text-sm'
              aria-labelledby='dropdownInformationButton'>
              {N.map((data) => {
                return (
                  <Link to={Selector + 'nationaux'}>
                    <li className='py-2 px-4 hover:bg-slate-600 hover:bg-opacity-50  transition-all text-slate-100 hover:text-[#FFCC00]'>
                      {data}
                    </li>
                  </Link>
                )
              })}
            </ul>
            <Link
              to={Selector + 'international'}
              className='font-medium py-3 px-[40%] text-sm hover:bg-slate-600 hover:bg-opacity-50  transition-all text-slate-400 hover:text-[#E50914]'>
              International
            </Link>

            <ul
              className='py-1 text-sm'
              aria-labelledby='dropdownInformationButton'>
              {I.map((data) => {
                return (
                  <Link to={Selector + 'international'}>
                    <li className='py-2 px-4 hover:bg-slate-600 hover:bg-opacity-50  transition-all text-slate-100 hover:text-[#FFCC00]'>
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
