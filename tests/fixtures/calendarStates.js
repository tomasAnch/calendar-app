export const events = [
  {
    id: '1',
    start: new Date( '2024-7-20 13:00:00' ),
    end: new Date( '2024-7-20 15:00:00' ),
    title: 'Aniversario Dokkan',
    notes: 'Una nota del aniversario',
  },
  {
    id: '2',
    start: new Date( '2024-8-25 13:00:00' ),
    end: new Date( '2024-8-25 15:00:00' ),
    title: 'Worldwide Dokkan',
    notes: 'Una nota de la wwc',
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventsState = {
  isLoadingEvents: false,
  events: [ ...events ],
  activeEvent: null,
};

export const calendarWithActiveEventsState = {
  isLoadingEvents: false,
  events: [ ...events ],
  activeEvent: { ...events[0] },
};