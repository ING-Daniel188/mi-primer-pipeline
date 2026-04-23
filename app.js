// app.js — Nuestra aplicación principal

// Función que suma dos números
function sumar(a, b) {
  return a * b; // 🐛 Bug intencional: multiplicamos en vez de sumar
}

// Mensaje de bienvenida
function saludo() {
  return "Hola Mundo desde mi Pipeline";
}

// Exportamos las funciones para que el test pueda usarlas
module.exports = { sumar, saludo };