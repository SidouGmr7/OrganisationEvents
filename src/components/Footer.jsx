import React from 'react'
import SocialItem from '../components/SocialItem'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className='py-10 overflow-hidden  bg-slate-900'>
      <div className='flex md:flex-row flex-col items-center relative max-w-6xl md:p-4 md:mx-auto gap-10'>
        <div className='flex flex-col md:w-[50%] w-[87%] items-center gap-2'>
          <motion.img
            whileHover={{ scale: 1.05 }}
            initial={{ x: 200 }}
            whileInView={{ x: 0, scale: 1 }}
            src='https://digitalmarketingdz.com/wp-content/uploads/2022/09/new-logo-blanc-02.png'
            alt='Logo'
            className='w-40 ml-10 mb-15 transition duration-1000'
          />
          <motion.p
            initial={{ x: -200 }}
            whileInView={{ x: 0, scale: 1 }}
            className='text-white text-justify transition duration-1000'>
            DZ DIGITAL MARKETING est un fournisseur global de services de
            marketing numérique. Que vous soyez a la recherche d’une stratégie
            clé en main, création et développement de votre site un service
            spécifique à une compagne à court terme, notre expérience et notre
            approche se révélèrent être a coup sûr un atout précieux
          </motion.p>
          <div className='flex md:flex-row flex-col'>
            <SocialItem name='Facebook' Color='text-blue-600' />
            <SocialItem name='Instagram' Color='text-orange-500' />
            <SocialItem name='Linkedin' Color='text-blue-400' />
          </div>
        </div>
        <div className='md:w-full items-center'>
          <p className='text-[#FFCC00] text-2xl mb-10 font-bold relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-[#FFCC00]'>
            Liens utiles
          </p>
          <SocialItem name='Strategie Digital' Color='text-[#FFCC00]' />
          <SocialItem name='UI Designs' Color='text-[#FFCC00]' />
          <SocialItem name='Rédaction de contenu' Color='text-[#FFCC00]' />
          <SocialItem name='Strategie Marketing' Color='text-[#FFCC00]' />
          <SocialItem name='Developpement Web' Color='text-[#FFCC00]' />
          <SocialItem name='Media Sociaux' Color='text-[#FFCC00]' />
        </div>
        <div className='w-[65%] items-center'>
          <p className='text-[#FFCC00] text-2xl mb-10 font-bold relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-[#FFCC00]'>
            Contact
          </p>
          <SocialItem name='+213 554 02 46 41' Color='text-[#FFCC00]' />
          <SocialItem name='+447874384147' Color='text-[#FFCC00]' />
          <SocialItem
            name='info@digitalmarketingdz.com'
            Color='text-[#FFCC00]'
          />
          <SocialItem
            name='The Lansdowne Building, 2 Lansdowne road CR9 2ER London'
            Color='text-[#FFCC00]'
          />
        </div>
      </div>
    </div>
  )
}

export default Footer
