import { motion } from 'framer-motion'

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaRegEnvelope,
  FaInstagram,
  FaFacebookMessenger,
  FaChartBar,
  FaChalkboardTeacher,
  FaFileContract,
  FaChartLine,
  FaCode,
  FaUsers,
  FaPhoneAlt,
  FaEnvelopeOpenText,
  FaMapMarkedAlt,
} from 'react-icons/fa'

const SocialItem = ({ name, href, Color }) => {
  return (
    <motion.a
      initial={{ x: 50 }}
      whileInView={{ x: 0, scale: 1 }}
      className={`text-xl m-4 ${Color} rounded-full hover:text-white transition duration-1000  flex gap-4`}
      href={href}>
      <div>
        {
          {
            Github: <FaGithub />,
            Facebook: <FaFacebook />,
            Linkedin: <FaLinkedin />,
            Email: <FaRegEnvelope />,
            Instagram: <FaInstagram />,
            Messanger: <FaFacebookMessenger />,
            'Strategie Digital': <FaChartBar />,
            'UI Designs': <FaChalkboardTeacher />,
            'Rédaction de contenu': <FaFileContract />,
            'Strategie Marketing': <FaChartLine />,
            'Developpement Web': <FaCode />,
            'Media Sociaux': <FaUsers />,
            '+213 554 02 46 41': <FaPhoneAlt />,
            '+447874384147': <FaPhoneAlt />,
            'info@digitalmarketingdz.com': <FaEnvelopeOpenText />,
            'The Lansdowne Building, 2 Lansdowne road CR9 2ER London': (
              <FaMapMarkedAlt />
            ),
          }[name]
        }
      </div>
      <p className='text-white text-sm'>{name}</p>
    </motion.a>
  )
}

export default SocialItem
