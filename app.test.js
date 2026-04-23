// app.test.js — Nuestras pruebas automáticas

const { sumar, saludo } = require("./app");

// Prueba 1: ¿Suma bien?
test("sumar(2, 3) debe devolver 5", () => {
  expect(sumar(2, 3)).toBe(5);
});

// Prueba 2: ¿El saludo es correcto?
test('saludo() debe devolver "Hola Mundo desde mi Pipeline"', () => {
  expect(saludo()).toBe("Hola Mundo desde mi Pipeline");
});