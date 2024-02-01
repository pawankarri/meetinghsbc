import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment/moment'

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

 const events= [
    {
        start:moment().add(3, 'days').toDate(),
        end: moment().add(3, 'days').toDate(),
        title: "live"
      },
    {
        start:moment().subtract(18, 'days').toDate(),
        end: moment().subtract(18, 'days').toDate(),
        title: "Event"
      },
      {
        start:moment().subtract(18, 'days').toDate(),
        end: moment().subtract(18, 'days').toDate(),
        title: "Deployment"
      },
    {
        start:moment().subtract(10, 'days').toDate(),
        end: moment().subtract(10, 'days').toDate(),
        title: "StandUp call"
      },
    {
      start: moment().toDate(),
      end:moment().toDate(),
      title: "meeting"
    }
  ]

const CalenderRight = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500,width:'50vw', }}
    />
  </div>
);

export default CalenderRight;
