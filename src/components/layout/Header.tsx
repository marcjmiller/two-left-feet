import Link from 'next/link'

const navItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: 'about',
  },
  {
    text: 'Classes',
    href: 'classes',
  },
  {
    text: 'Private Lessons',
    href: 'private_lessons',
  },
  {
    text: 'Events',
    href: 'events',
  },
  {
    text: 'Wedding Dances',
    href: 'wedding_dances',
  },
  {
    text: 'Studio Rental',
    href: 'studio_rental',
  },
  {
    text: 'Calendar',
    href: 'calendar',
  },
  {
    text: 'Contact',
    href: 'contact',
  },
]

const StudioInfo = () => (
  <ul className='hidden w-64 self-center text-sm 2xl:block'>
    <li>1405 Kiln Creek Parkway</li>
    <li>Newport News, VA 23602</li>
    <li>Phone: 757.813.4371</li>
  </ul>
)

const Nav = () => (
  <>
    <div className='block'>
      <ul className=''>
        {navItems.map((link, idx) => (
          <li
            key={idx}
            className='inline select-none p-2 text-sm hover:cursor-pointer hover:text-teal-600'
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  </>
)

const Logo = () => (
  <div className="flex flex-col items-center justify-center font-['Bilbo'] text-teal-600">
    <div className='text-4xl'>Two Left Feet</div>
    <div className='text-xl'>Dance Studio</div>
  </div>
)

const Header = () => (
  <div className='flex h-20 items-end justify-between'>
    <div className='flex w-full items-end justify-between 2xl:justify-start'>
      <Logo />
      <Nav />
    </div>
    <StudioInfo />
  </div>
)

export default Header
