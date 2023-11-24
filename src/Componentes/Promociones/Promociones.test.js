import { render, screen } from "@testing-library/react";
import Promociones from "../Promociones/Promociones";

test("Validar que existe el titulo de promociones", () => {
  render(<Promociones />);
  const tituloPromociones = screen.getByText(/¡PROMOCIONES DE LOCURA!/i);
  expect(tituloPromociones).toBeInTheDocument();
});

test("Validar ", () => {
    render(<Promociones />);
    const informacionPromociones = screen.getByText(/¡PROMOCIONES DE LOCURA!/i);
    expect(informacionPromociones).toBeInTheDocument();
  });

