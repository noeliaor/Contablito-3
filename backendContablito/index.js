const express = require("express"); // Importa la librería express
const cors = require("cors"); // Importa la librería cors
const transactionController = require("./controller/transaction"); // Importa el módulo que creamos para manejar las operaciones al servidor de transacciones

const app = express(); // Se obtiene una instancia de servidor
const PORT = 8000; // Puerto donde se escucharán las peticiones

const TRANSACTIONS_URL = "/apiv1/transactions"; // ENDPOINT de transacciones (ruta)

app.use(cors()); // Permite que el servidor pueda recibir peticiones desde diferentes dominios
app.use(express.json()); // Permite que los parámetros de las peticiones sean recibidos como JSON
app.use(express.urlencoded({ extended: false })); // Permite interpretar los datos recibidos en el cuerpo de las peticiones

/**
 * Ruta para chequear que el servidor está funcionando
 */
app.get("/check", (req, res) => {
  res.send("SERVIDOR FUNCIONANDO!");
});

/**
 * Lista las transacciones almacenadas.
 * app.get significa que espera peticiones GET a la ruta especificada
 */
app.get(
  TRANSACTIONS_URL /* Ruta de la petición */,
  (
    req /* Tiene la info de la petición del frontend */,
    res /* Tiene los métodos para realizar la respuesta al frontend */
  ) => {
    res.send(JSON.stringify(transactionController.listData()));
  }
);

/**
 * Almacena la transacción recibida en el cuerpo de la petición.
 * app.post significa que espera peticiones POST a la ruta especificada
 */
app.post(TRANSACTIONS_URL, (req, res) => {
  console.log(req.body);
  const transaction = req.body;
  if (transactionController.createData(transaction)) {
    res.send("DATO INGRESADO CORRECTAMENTE!");
  } else {
    res.send("Hay campos obligatorios sin ingresar");
  }
});

/**
 * Devuelve la transacción que se corresponde con el índice especificado.
 * :index es parte de la URL, y es variable, por lo que se le llama "Parámetro".
 * Los ":" (dos puntos) indican que es un parámetro
 */
app.get(`${TRANSACTIONS_URL}/:index`, (req, res) => {
  res.send(transactionController.getData(req.params.index));
});

/**
 * Actualiza la transacción que se corresponde con el parámetro index, con los datos enviados en el body de la petición
 * app.put significa que espera peticiones PUT en la ruta especificada
 */
app.put(`${TRANSACTIONS_URL}/:index`, (req, res) => {
  transactionController.updateData(req.params.index, req.body);
  res.send("DATO ACTUALIZADO CORRECTAMENTE!");
});

/**
 * Elimina la transacción que se corresponde con el parámetro index.
 * app.delete significa que espera peticiones DELETE en la ruta especificada
 */
app.delete(`${TRANSACTIONS_URL}/:index`, (req, res) => {
  transactionController.deleteData(req.params.index);
  res.send("DATO ELIMINADO CORRECTAMENTE");
});

/**
 * Inicia el servidor y lo deja ejecutándose en el puerto especificado (en este ejemplo dado por la constante PORT)
 */
app.listen(PORT, () => {
  console.log("servidor en ejecución");
});
