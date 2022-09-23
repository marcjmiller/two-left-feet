import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'

import Seo from '@/components/Seo'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    id: 1,
    title: 'test event',
    allDay: false,
    start: new Date(2022, 8, 23, 9, 30),
    end: new Date(2022, 8, 23, 12, 30),
  },
]

const CalendarPage = () => (
  <div className='h-full'>
    <Seo templateTitle='Calendar' />
    <div className='py-2 text-xl font-bold'>Calendar</div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 500 }}
    />
  </div>
)

export default CalendarPage
