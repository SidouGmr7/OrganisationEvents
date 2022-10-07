import Scroll from '../components/Scroll'
import ServiceItem from '../components/ServiceItem'

const Services = () => {
  return (
    <div className='py-10 overflow-hidden scrollbar-hide bg-slate-900'>
      <div
        className='relative max-w-4xl lg:h-screen mx-auto  py-28'
        id='service'>
        <p className='uppercase text-slate-300  text-2xl md:text-4xl font-bold text-center pt-4 relative before:absolute before:rounded-lg before:w-20 before:h-1 before:-bottom-3 before:bg-slate-300'>
          Nos Services
        </p>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-center pt-10'>
          <ServiceItem Name='Strategie Digital' Router='/' />
          <ServiceItem Name='UI Designs' Router='/' />
          <ServiceItem Name='Rédaction de contenu' Router='/' />
          <ServiceItem Name='Strategie Marketing' Router='/' />
          <ServiceItem Name='Developpement Web' Router='/' />
          <ServiceItem Name='Media Sociaux' Router='/' />
        </div>
        <Scroll selector='#contact' />
      </div>
    </div>
  )
}

export default Services
