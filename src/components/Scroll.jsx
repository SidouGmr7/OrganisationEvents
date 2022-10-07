import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from 'react-icons/fa'

const Scroll = ({ selector, bottom }) => {
  return (
    <ScrollIntoView selector={selector} className='absolute inset-x-0 bottom-0'>
      <div className={`mx-auto ${bottom}`}>
        <FaChevronDown className='animate-bounce mx-auto text-4xl text-[#FFCC00]' />
      </div>
    </ScrollIntoView>
  )
}

export default Scroll
