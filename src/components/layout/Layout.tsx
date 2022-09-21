import { FC } from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

interface OwnProps {
  children: React.ReactNode
}

const Layout: FC<OwnProps> = ({ children }: { children: React.ReactNode }) => (
  <div className='flex h-screen flex-col justify-between p-2'>
    <Header />
    <div className='flex justify-center'>{children}</div>
    <Footer />
  </div>
)

export default Layout
