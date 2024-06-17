import { onCloseDateModal, onOpenDateModal, uiSlice } from "../../../src/store/ui/uiSlice"

describe('Pruebas en uiSlice', () => {

  test('Debe regresar el estado por defecto', () => {

    // expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy(); <- con este iríamos testeando de uno en uno
    expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false }); // <- con este tendríamos que incluir, en la misma linea, las diferentes funciones

  });

  test('Debe cambiar el isDateModalOpen correctamente', () => {

    let state = uiSlice.getInitialState();
    state = uiSlice.reducer( state, onOpenDateModal() );
    expect( state.isDateModalOpen ).toBeTruthy();

    state = uiSlice.reducer( state, onCloseDateModal() );
    expect( state.isDateModalOpen ).toBeFalsy();

  })

})