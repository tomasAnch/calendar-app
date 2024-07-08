import { render, screen } from "@testing-library/react";
import { useAuthStore } from "../../src/hooks/useAuthStore";
import { AppRouter } from "../../src/router/AppRouter";
import { MemoryRouter } from "react-router-dom";
import { CalendarPage } from "../../src/calendar";

jest.mock("../../src/hooks/useAuthStore");

jest.mock("../../src/calendar", () => ({
  CalendarPage: () => <h1>CalendarPage</h1>
}))

describe("Pruebas en <AppRouter />", () => {

  const mockCheckAuthToken = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("Debe mostrar la pantalla de carga y llamar a checkAuthToken", () => {

    useAuthStore.mockReturnValue({
      status: "checking",
      checkAuthToken: mockCheckAuthToken,
    });

    render(<AppRouter />); // -> no seguí este test debido a cambios míos en el AppRouter
    screen.debug();

  });

  test("Debe mostrar el login en caso de no estar autenticado", () => {

    useAuthStore.mockReturnValue({
      status: "not-authenticated",
      checkAuthToken: mockCheckAuthToken,
    });

    const { container } = render(
      <MemoryRouter initialEntries={['/auth2/algo/algomas']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect( screen.getByText('Ingreso') ).toBeTruthy();
    expect( container ).toMatchSnapshot()

  });

  test("Debe mostrar el calendario en caso de estar autenticado", () => {

    useAuthStore.mockReturnValue({
      status: "authenticated",
      checkAuthToken: mockCheckAuthToken,
    });

    render(
      <MemoryRouter initialEntries={['/auth2/algo/algomas']}>
        <AppRouter />
      </MemoryRouter>
    );

    expect( screen.getByText('CalendarPage') ).toBeTruthy();

  });

});
