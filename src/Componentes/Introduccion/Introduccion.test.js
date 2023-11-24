import { render, screen } from "@testing-library/react";
import Introduccion from "../Introduccion/Introduccion";

test("renderizar titulos del encabezado", () => {
  render(<Introduccion />);
  const tituloPrincipal = screen.getByText(/TIENDA VIRTUAL DE MASCOTAS/i);
  expect(tituloPrincipal).toBeInTheDocument();
});
