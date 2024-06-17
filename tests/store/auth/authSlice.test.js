import { authSlice, clearErrorMessage, onChecking, onLogin, onLogout } from "../../../src/store/auth/authSlice"
import { authenticatedState, initialState } from "../../fixtures/authStates"
import { testUserCredentials } from "../../fixtures/testUser"

describe('Pruebas en authSlice', () => {

  test('Debe regresar el estado inicial', () => {
    
    expect( authSlice.getInitialState() ).toEqual( initialState )

  })

  test('Debe realizar el login', () => {

    const state = authSlice.reducer( initialState, onLogin( testUserCredentials ) );

    expect( state ).toEqual({
      status: 'authenticated',
      user: testUserCredentials,
      errorMessage: undefined,
    });

  })

  test('Debe realizar el logout', () => {

    const state = authSlice.reducer( authenticatedState, onLogout() );

    expect( state ).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: undefined,
    })

  });
  
  test('Debe realizar el logout con un mensaje de error', () => {

    const errorMessage = 'Credenciales no válidas'
    const state = authSlice.reducer( authenticatedState, onLogout( errorMessage ) );

    expect( state ).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessage: errorMessage,
    })

  });

  test('Debe limpiar el mensaje de error', () => {

    const errorMessage = 'Credenciales no válidas';
    const state = authSlice.reducer( authenticatedState, onLogout( errorMessage ) );
    const newState = authSlice.reducer( state, clearErrorMessage() );
    
    expect( newState.errorMessage ).toBe( undefined );

  });

  test('Debe dejar el estado en checking', () => {

    const state = authSlice.reducer( authenticatedState, onChecking() );
    
    expect( state ).toEqual({
      status: 'checking',
      user: {},
      errorMessage: undefined,
    })

  });   

})