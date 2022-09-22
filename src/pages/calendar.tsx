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

const CalendarPage = () => (
  <div className='h-full'>
    <Seo templateTitle='Calendar' />
    <div className='py-2 text-xl font-bold'>Calendar</div>
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 500 }}
    />
  </div>
)

export default CalendarPage
