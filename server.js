const http = require("http");
const { sumar, saludo } = require("./app");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  if (req.url === "/sumar") {
    res.end(`Resultado de sumar(2,3) = ${sumar(2, 3)}`);
  } else {
    res.end(saludo());
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
