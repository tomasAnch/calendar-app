import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventsState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates";

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

  test('onDeleteEvent debe borrar el evento activo', () => {

    const state = calendarSlice.reducer( calendarWithActiveEventsState, onDeleteEvent() );
    expect( state.activeEvent ).toBe( null );
    expect( state.events ).not.toContain( events[0] );

  })

  test('onLoadEvent debe establecer los eventos', () => {

    const state = calendarSlice.reducer( initialState, onLoadEvents( events ) );
    expect( state.isLoadingEvents ).toBeFalsy();
    expect( state.events ).toEqual( events );

    const newState = calendarSlice.reducer( state, onLoadEvents( events ) );
    expect( state.events.length ).toBe( events.length );

  });

  test('onLogoutCalendar debe limpiar el estado', () => {

    const state = calendarSlice.reducer( calendarWithActiveEventsState, onLogoutCalendar() );
    expect( state ).toEqual( initialState );

  })

})