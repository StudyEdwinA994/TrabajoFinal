import { render, screen } from "@testing-library/react";
import BotonesPromociones from "../BotonesPromociones/BotonesPromociones";

test("Validando que exista en promociones cuidado el boton Agregar al carrito", () => {
  render(<BotonesPromociones />);
  const botonAgregarAlCarrito = screen.getByText(/Agregar al carrito/i, {
    selector: "#botonCuidado",
  });
  expect(botonAgregarAlCarrito).toBeInTheDocument();
});

test("Validando que exista en promociones comida el boton Agregar al carrito", () => {
  render(<BotonesPromociones />);
  const botonAgregarAlCarrito = screen.getByText(/Agregar al carrito/i, {
    selector: "#botonComida",
  });
  expect(botonAgregarAlCarrito).toBeInTheDocument();
});

test("Validando que exista en promociones jugueteria el boton Agregar al carrito", () => {
  render(<BotonesPromociones />);
  const botonAgregarAlCarrito = screen.getByText(/Agregar al carrito/i, {
    selector: "#botonJugueteria",
  });
  expect(botonAgregarAlCarrito).toBeInTheDocument();
});
