import Scroll from '../components/Scroll'
import { AiFillAliwangwang } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div className='py-10 overflow-hidden scrollbar-hide bg-slate-900 bg-opacity-80'>
      <div
        className='relative max-w-4xl lg:h-screen mx-auto  py-28'
        id='service'>
        <p className='uppercase text-slate-300  text-2xl md:text-4xl font-bold text-center pt-4 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-slate-300'>
          Nos Services
        </p>
        <div className='grid lg:grid-cols-3 md:grid-cols-1 justify-center pt-10 gap-8 '>
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className='flex flex-col items-center backdrop-blur-lg w-[70%] md:w-full mx-auto  bg-slate-600 bg-opacity-20 shadow-xl p-4 rounded-3xl md:border-l-8 border-l-4 md:hover:scale-105 transition-all duration-500 border-[#FFCC00]'>
            <AiFillAliwangwang className='text-6xl text-[#FFCC00]' />
            <header className='mt-4 text-[#FFCC00] text-xl'>rapide</header>
            <p className='text-center mt-10 text-zinc-300'>
              this is a paragghraphe this is a paragghraphethis is a
              paragghraphethis is a paragghraphethis is a paragghraphe
            </p>
          </motion.div>
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className='flex flex-col items-center backdrop-blur-lg w-[70%] md:w-full mx-auto bg-slate-600 bg-opacity-20 shadow-xl p-4 rounded-3xl md:border-l-8 border-l-4 hover:scale-105 transition-all duration-500 border-[#FFCC00]'>
            <AiFillAliwangwang className='text-6xl text-[#FFCC00]' />
            <header className='mt-4 text-[#FFCC00] text-xl'>rapide</header>
            <p className='text-center mt-10 text-zinc-300'>
              this is a paragghraphe this is a paragghraphethis is a
              paragghraphethis is a paragghraphethis is a paragghraphe
            </p>
          </motion.div>
          <motion.div
            animate={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className='flex flex-col items-center backdrop-blur-lg w-[70%] md:w-full mx-auto bg-slate-600 bg-opacity-20 shadow-xl p-4 rounded-3xl md:border-l-8 border-l-4 hover:scale-105 transition-all duration-500 border-[#FFCC00]'>
            <AiFillAliwangwang className='text-6xl text-[#FFCC00]' />
            <header className='mt-4 text-[#FFCC00] text-xl'>rapide</header>
            <p className='text-center mt-10 text-zinc-300'>
              this is a paragghraphe this is a paragghraphethis is a
              paragghraphethis is a paragghraphethis is a paragghraphe
            </p>
          </motion.div>
        </div>
        <Scroll selector='#agenda' />
      </div>
    </div>
  )
}

export default Services
