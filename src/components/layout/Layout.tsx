import { FC } from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

interface OwnProps {
  children: React.ReactNode
}

const Layout: FC<OwnProps> = ({ children }) => (
  <div className='flex h-screen flex-col justify-between p-2'>
    <Header />
    <div className='mx-auto h-full w-3/4 items-center overflow-hidden p-8'>
      {children}
    </div>
    <Footer />
  </div>
)

export default Layout
