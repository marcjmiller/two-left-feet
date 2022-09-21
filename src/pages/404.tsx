import { RiAlarmWarningFill } from 'react-icons/ri'

import ArrowLink from '@/components/links/ArrowLink'
import Seo from '@/components/Seo'

const NotFoundPage = () => (
  <div className='flex flex-col items-center'>
    <Seo templateTitle='Not Found' />
    <RiAlarmWarningFill
      size={60}
      className='drop-shadow-glow animate-flicker text-red-500'
    />
    <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
    <ArrowLink className='mt-4 md:text-lg' href='/'>
      Back to Home
    </ArrowLink>
  </div>
)

export default NotFoundPage
