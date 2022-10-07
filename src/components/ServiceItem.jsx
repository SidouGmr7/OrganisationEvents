import {
  FaChartBar,
  FaChalkboardTeacher,
  FaFileContract,
  FaChartLine,
  FaCode,
  FaUsers,
} from 'react-icons/fa'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServiceItem = ({ Name }) => {
  return (
    <motion.div
      animate={{x:200, opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ x: 0, scale: 1, opacity: 1 }}
      className='flex flex-col p-8 items-center '>
      <div className='border-4 border-[#FFCC00] text-[#FFCC00] rounded-full w-32 h-28 pt-5'>
        {
          {
            'Strategie Digital': (
              <FaChartBar className='mx-auto text-4xl w-16 h-16 ' />
            ),
            'UI Designs': (
              <FaChalkboardTeacher className='mx-auto text-4xl w-16 h-16 ' />
            ),
            'Rédaction de contenu': (
              <FaFileContract className='mx-auto text-4xl w-16 h-16 ' />
            ),
            'Strategie Marketing': (
              <FaChartLine className='mx-auto text-4xl w-16 h-16 ' />
            ),
            'Developpement Web': (
              <FaCode className='mx-auto text-4xl w-16 h-16 ' />
            ),
            'Media Sociaux': (
              <FaUsers className='mx-auto text-4xl w-16 h-16 ' />
            ),
          }[Name]
        }
      </div>
      <Link to='/home'>
        <p className='mt-6 text-xl text-slate-300 font-bold text-center'>
          {Name}
        </p>
      </Link>
    </motion.div>
  )
}

export default ServiceItem
