import { calendarSlice, onAddNewEvent, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates";

describe('Pruebas en calendarSlice', () => {

  test('Debe regresar el estado inicial', () => {

    const state = calendarSlice.getInitialState();
    expect( state ).toEqual( initialState );

  });

  test('onSetActiveEvent debe activar el evento', () => {

    const state = calendarSlice.reducer( calendarWithEventsState, onSetActiveEvent( events[0] ) );
    expect( state.activeEvent ).toEqual( events[0] );

  })

  test('onAddNewEvent debe agregar el evento', () => {

    const newEvent = {
      id: '3',
      start: new Date( '2023-7-20 13:00:00' ),
      end: new Date( '2023-7-20 15:00:00' ),
      title: 'Aniversario Dokkan',
      notes: 'Una nota del aniversario',
    };

    const state = calendarSlice.reducer( calendarWithEventsState, onAddNewEvent( newEvent ) );
    expect( state.events ).toEqual([ ...events, newEvent ]); 

  });
  
  test('onUpdateEvent debe actualizar el evento', () => {

    const updatedEvent = {
      id: '1',
      start: new Date( '2023-7-20 13:00:00' ),
      end: new Date( '2023-7-20 15:00:00' ),
      title: 'Aniversario Dokkan actualizado',
      notes: 'Una nota del aniversario actualizada',
    };

    const state = calendarSlice.reducer( calendarWithEventsState, onUpdateEvent( updatedEvent ) );
    expect( state.events ).toContain( updatedEvent );

  });

})