import Button from './Button'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div
      className='py-10 overflow-hidden scrollbar-hide  bg-slate-900'
      id='about'>
      <div className='flex md:flex-row flex-col items-center mt-20 mb-20 gap-10 md:gap-0'>
        <motion.div
          animate={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='w-[50%] flex flex-col items-center ml-4 transition duration-500'>
          <div>
            <p className='text-[#E50914] font-bold uppercase text-xs relative before:absolute before:rounded-lg before:w-12 before:h-[15%] before:-bottom-1 before:bg-[#E50914]'>
              connectons-nous
            </p>
            <div className='text-[#FFCC00] capitalize text-6xl font-bold w-72 pt-4'>
              <p className='text-4xl md:text-6xl'>à Propre Nous</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className='md:w-[50%] flex flex-col items-center ml-4 transition duration-1000'>
          <p className='text-slate-300 text-justify pb-6 md:text-xl w-[70%] font-mono'>
            DZ DIGITAL MARKETING est un fournisseur global de services de
            marketing numérique. Que vous soyez a la recherche d’une stratégie
            clé en main, création et développement de votre site un service
            spécifique à une compagne à court terme, notre expérience et notre
            approche se révélèrent être a coup sûr un atout précieux
          </p>
          <Button
            Name='SAVOIR PLUS'
            Selector='#service'
            BGC='bg-[#FFCC00] text-slate-900'
          />
        </motion.div>
      </div>
    </div>
  )
}

export default About
