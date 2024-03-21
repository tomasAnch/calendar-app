import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours, format, parse, startOfWeek, getDay } from 'date-fns';
import { Navbar } from '../';

import { localizer, getMessagesES } from '../../helpers';

const events = [{
  title: 'Dia de summons',
  notes: 'Hay que sumonear',
  start: new Date(),
  end: addHours( new Date(), 2 ),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Tomas'
  }
}]

export const CalendarPage = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    console.log({ event, start, end, isSelected });

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesES() }
        eventPropGetter={ eventStyleGetter }
      />

    </>
  )
}
