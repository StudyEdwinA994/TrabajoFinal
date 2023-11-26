import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer";

test("Validar si en el footer esta la imagen de gato", () => {
  render(<Footer />);

  const imagenGato = screen.getByAltText("footerGato");

  expect(imagenGato).toBeInTheDocument();
});
