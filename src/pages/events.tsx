import Link from 'next/link'

import Seo from '@/components/Seo'

const EventsPage = () => (
  <div className='w-3/4'>
    <Seo templateTitle='Events' />
    <div className='py-2 text-xl font-bold'>Events</div>
    <div className='py-2 font-bold'>
      Two Left Feet Dance Studio currently has ongoing events as follows:
    </div>
    <div className='py-2'>
      <div className='font-bold underline'>Line Dance Thursdays</div> Although
      not an “event” as such, every Thursday. Lin Hines offers an ongoing Line
      Dance class on Thursday evening. This is an ongoing class where drop ins
      are always welcome., Lesson begins at 6:00. Lin teaches Line Dance from
      Country to Contemporary. Cost of this class is $5 per class or $40 for a
      10 session punch card.
    </div>
    <div className='py-2'>
      <div className='font-bold underline'>
        Fridays (1st. 3rd and 5th Fridays)
      </div>
      Two Left Feet sponsors a social dance party. Entrance includes a lesson
      beginning at 7:30, Mixed Social Dancing beginning at 8:30 The cost is $10
      pp/ $8 for current Two Left Feet Students or $5 for students with a proper
      Student ID. <br /> Lessons will differ at each Friday Dance. The variety
      will be wide and on a basic level in order to give dancers a familiarity
      with different dance styles.
      <div className='text-red-500'>Check calendar for exact dates.</div>
    </div>
    <div className='py-2'>
      <div className='font-bold underline'>Saturdays</div> Colonial Shag Club
      meets at Two Left Feet from 6pm-10pm. Entrance includes lesson from 6 pm
      -7 pm. Lessons are on a rotation schedule between beginners and Beyond
      Basics. 7pm-to 10 pm is dancing. Colonial Shag Club has a group of
      terrific DJs who supply the tunes on a rotating schedule The cost is $5
      for members $7 for associates (all others).
      <div className='text-red-500'>Check calendar for exact dates.</div>
      <div className=''>
        Visit{' '}
        <div className='inline-block underline hover:text-teal-600'>
          <Link href='https://www.colonialshagclub.com'>
            Colonial Shag Club
          </Link>
        </div>{' '}
      </div>
      Check out the monthly newsletter for Lesson Schedule and DJ information.
    </div>
  </div>
)

export default EventsPage
