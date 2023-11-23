import { render, screen } from '@testing-library/react';
import Header from '../Header/Header';

test('renderizar titulos del encabezado', () => {
  render(<Header />);
  const tituloInicio = screen.getByText(/Inicio/);
  expect(tituloInicio).toBeInTheDocument();
  const tituloContactanos = screen.getByText(/Contáctanos/);
  expect(tituloContactanos).toBeInTheDocument();
  const tituloAdopta = screen.getByText(/Adopta-API/);
  expect(tituloAdopta).toBeInTheDocument();
  const tituloUbicacion = screen.getByText(/Ubicación/);
  expect(tituloUbicacion).toBeInTheDocument();
});
