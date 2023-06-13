import { useTranslation } from 'react-i18next'

export default function Switch({ DateSelect }) {
  const [t] = useTranslation()
  switch (DateSelect) {
    case '20/10/2023': return t('agenda.salon') + ': ' + t('Location.15')
    case '21/10/2023': return t('agenda.salon') + ': ' + t('Location.15')
    case '22/10/2023': return t('agenda.salon') + ': ' + t('Location.15')
    case '26/10/2023': return t('agenda.salon') + ': ' + t('Location.17')
    case '27/10/2023': return t('agenda.salon') + ': ' + t('Location.17')
    case '28/10/2023': return t('agenda.salon') + ': ' + t('Location.17')

    case '17/11/2023': return t('agenda.salon') + ': ' + t('Location.16')
    case '18/11/2023': return t('agenda.salon') + ': ' + t('Location.16')
    case '19/11/2023': return t('agenda.salon') + ': ' + t('Location.16')
    case '24/11/2023': return t('agenda.salon') + ': ' + t('Location.9')
    case '25/11/2023': return t('agenda.salon') + ': ' + t('Location.9')
    case '26/11/2023': return t('agenda.salon') + ': ' + t('Location.9')

    case '15/12/2023': return t('agenda.salon') + ': ' + t('Location.7')
    case '16/12/2023': return t('agenda.salon') + ': ' + t('Location.7')
    case '17/12/2023': return t('agenda.salon') + ': ' + t('Location.7')
    case '22/12/2023': return t('agenda.salon') + ': ' + t('Location.10')
    case '23/12/2023': return t('agenda.salon') + ': ' + t('Location.10')
    case '24/12/2023': return t('agenda.salon') + ': ' + t('Location.10')

    case '5/1/2024': return t('agenda.event') + ': ' + t('Location.6') + '(' + t('Location.19')+')' + ' / ' +  t('agenda.salon') + ': ' + t('Location.2')
    case '6/1/2024': return t('agenda.salon') + ' et ' +  t('agenda.event') + ': ' + t('Location.2')
    case '7/1/2024': return t('agenda.salon') + ': ' + t('Location.2')
    case '12/1/2024': return t('agenda.event') + ': ' + t('Location.5') + '(' + t('Location.20')+')'

    case '2/2/2024': return t('agenda.event') + ': ' + t('Location.6') + '(' + t('Location.19')+')' + ' / ' +  t('agenda.salon') + ': ' + t('Location.3')
    case '3/2/2024': return t('agenda.salon') + ' et ' +  t('agenda.event') + ': ' + t('Location.3')
    case '4/2/2024': return t('agenda.salon') + ': ' + t('Location.3')
    case '9/2/2024': return t('agenda.event') + ': ' + t('Location.5') + '(' + t('Location.20')+')'

    case '2/3/2024': return t('agenda.event') + ': ' + t('Location.6') + '(' + t('Location.19')+')'
    case '6/3/2024': return t('agenda.salon') + ': ' + t('Location.1')
    case '7/3/2024': return t('agenda.salon') + ' et ' +  t('agenda.event') + ': ' + t('Location.1')
    case '8/3/2024': return t('agenda.salon') + ': ' + t('Location.1')
    case '9/3/2024': return t('agenda.event') + ': ' + t('Location.5') + '(' + t('Location.20')+')'
    case '16/3/2024': return t('agenda.salon') + ': ' + t('Location.12')
    case '17/3/2024': return t('agenda.salon') + ': ' + t('Location.12')
    case '18/3/2024': return t('agenda.salon') + ': ' + t('Location.12')
    case '23/3/2024': return t('agenda.salon') + ': ' + t('Location.13')
    case '24/3/2024': return t('agenda.salon') + ': ' + t('Location.13')
    case '25/3/2024': return t('agenda.salon') + ': ' + t('Location.13')

    case '6/4/2024': return t('agenda.event') + ': ' + t('Location.6') + '(' + t('Location.19')+')' + ' / ' +  t('agenda.salon') + ': ' + t('Location.4')
    case '7/4/2024': return t('agenda.salon') + ' et ' +  t('agenda.event') + ': ' + t('Location.4')
    case '8/4/2024': return t('agenda.salon') + ': ' + t('Location.4')
    case '13/4/2024': return t('agenda.event') + ': ' + t('Location.5') + '(' + t('Location.20')+')'
    case '20/4/2024': return t('agenda.salon') + ': ' + t('Location.5')
    case '21/4/2024': return t('agenda.salon') + ': ' + t('Location.5')
    case '22/4/2024': return t('agenda.salon') + ': ' + t('Location.5')
    case '27/4/2024': return t('agenda.salon') + ': ' + t('Location.6')
    case '28/4/2024': return t('agenda.salon') + ': ' + t('Location.6')
    case '29/4/2024': return t('agenda.salon') + ': ' + t('Location.6')
    
    case '4/5/2024': return t('agenda.event') + ': ' + t('Location.6') + '(' + t('Location.19')+')'
    case '11/5/2024': return t('agenda.event') + ': ' + t('Location.5') + '(' + t('Location.20')+')'
    case '18/5/2024': return t('agenda.salon') + ': ' + t('Location.11')
    case '19/5/2024': return t('agenda.salon') + ': ' + t('Location.11')
    case '20/5/2024': return t('agenda.salon') + ': ' + t('Location.11')
    case '25/5/2024': return t('agenda.salon') + ': ' + t('Location.14')
    case '26/5/2024': return t('agenda.salon') + ': ' + t('Location.14')
    case '27/5/2024': return t('agenda.salon') + ': ' + t('Location.14')

    case '1/6/2024': return t('agenda.event') + ': ' + t('Location.6') + '(' + t('Location.19')+')'
    case '8/6/2024': return t('agenda.event') + ': ' + t('Location.5') + '(' + t('Location.20')+')'
    case '15/6/2024': return t('agenda.salon') + ': ' + t('Location.8')
    case '16/6/2024': return t('agenda.salon') + ': ' + t('Location.8')
    case '17/6/2024': return t('agenda.salon') + ': ' + t('Location.8')
    case '22/6/2024': return t('agenda.salon') + ': ' + t('Location.18')
    case '23/6/2024': return t('agenda.salon') + ': ' + t('Location.18')
    case '24/6/2024': return t('agenda.salon') + ': ' + t('Location.18')

    case '10/9/2024': return t('agenda.salon') + ': ' + t('Location.2')
    case '12/9/2024': return t('agenda.salon') + ' et ' +  t('agenda.event') + ': ' + t('Location.2')
    case '13/9/2024': return t('agenda.salon') + ': ' + t('Location.2')

    case '4/10/2023': return t('agenda.event') + ': ' + t('Location.2')
    case '13/10/2023': return t('agenda.salon') + ': ' + t('Location.2')
    case '14/10/2023': return t('agenda.salon') + ': ' + t('Location.2')
    case '15/10/2023': return t('agenda.salon') + ': ' + t('Location.2')

    case '10/11/2023': return t('agenda.salon') + ': ' + t('Location.3')
    case '11/11/2023': return t('agenda.salon') + ' et ' +  t('agenda.event') + ': ' + t('Location.3')
    case '12/11/2023': return t('agenda.salon') + ': ' + t('Location.3')

    case '1/12/2023': return t('agenda.salon') + ': ' + t('Location.4')
    case '2/12/2023': return t('agenda.salon') + ' et ' +  t('agenda.event') + ': ' + t('Location.4')
    case '3/12/2023': return t('agenda.salon') + ': ' + t('Location.4')

    default:
      return t('agenda.00')
  }
}


export const events = [
  '20/10/2023',
  '21/10/2023',
  '22/10/2023',
  '26/10/2023',
  '27/10/2023',
  '28/10/2023',
  '17/11/2023',
  '18/11/2023',
  '19/11/2023',
  '24/11/2023',
  '25/11/2023',
  '26/11/2023',
  '15/12/2023',
  '16/12/2023',
  '17/12/2023',
  '22/12/2023',
  '23/12/2023',
  '24/12/2023',
  '5/1/2024',
  '6/1/2024',
  '7/1/2024',
  '12/1/2024',
  '2/2/2024',
  '3/2/2024',
  '4/2/2024',
  '9/2/2024',
  '2/3/2024',
  '6/3/2024',
  '7/3/2024',
  '8/3/2024',
  '9/3/2024',
  '16/3/2024',
  '17/3/2024',
  '18/3/2024',
  '23/3/2024',
  '24/3/2024',
  '25/3/2024',
  '6/4/2024',
  '7/4/2024',
  '8/4/2024',
  '13/4/2024',
  '20/4/2024',
  '21/4/2024',
  '22/4/2024',
  '27/4/2024',
  '28/4/2024',
  '29/4/2024',
  '4/5/2024',
  '11/5/2024',
  '18/5/2024',
  '19/5/2024',
  '20/5/2024',
  '25/5/2024',
  '26/5/2024',
  '27/5/2024',
  '1/6/2024',
  '8/6/2024',
  '15/6/2024',
  '16/6/2024',
  '17/6/2024',
  '22/6/2024',
  '23/6/2024',
  '24/6/2024',
  '10/9/2024',
  '12/9/2024',
  '13/9/2024',
  '13/10/2023',
  '14/10/2023',
  '15/10/2023',
  '4/10/2023',
  '10/11/2023',
  '11/11/2023',
  '12/11/2023',
  '1/12/2023',
  '2/12/2023',
  '3/12/2023',
]
