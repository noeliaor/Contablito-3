const data = [
   { id: 394, name: "Tornillo 2cm", price: 20, stock: 400, minstock: 200 },
   { id: 395, name: "Tornillo 3cm", price: 30, stock: 560, minstock: 200 },
  { id: 396, name: "Tornillo 4cm", price: 40, stock: 280, minstock: 200 },
   { id: 397, name: "Tornillo 5cm", price: 50, stock: 390, minstock: 200 },
   { id: 400, name: "Ladrillo común", price: 200, stock: 500, minstock: 300 },
  { id: 401, name: "Ladrillo hueco", price: 390, stock: 300, minstock: 300 },
  { id: 402, name: "Ladrillo refractario", price: 418, stock: 400, minstock: 300 },
   { id: 403, name: "Ladrillo de vidrio", price: 540, stock: 1000, minstock: 300 }

, {idpadre:39 ,name: "Tornillo"},{idpadre:40,name: "Ladrillo"}]; // Array que simulará ser la base de datos

/**
 * Devuelve todos los datos de transacciones almacenados en el array
 * @returns Array de datos
 */
const listData = () => data;

/**
 * Método para añadir nuevas transacciones
 * @param {description, transaction, subtotal, iva} tr 
 * @returns 
 */
const createData = (tr) => {
  const { description, transaction, subtotal, iva } = tr;
  if (!(description && transaction && subtotal && iva)) {
    return false;
  }
  data.push(tr);
  return true;
};

/**
 * Elimina una transacción en la posición del array especificada
 * @param {Number} index 
 */
const deleteData = (index) => {
  data.splice(index, 1);
};

/**
 * Devuelve una transacción en la posición del array especificada
 * @param {Number} index 
 * @returns 
 */
const getData = (index) => data[index];

/**
 * Actualiza una transacción con los datos recibidos
 * @param {*} index índice del elemento a actualizar
 * @param {*} updatedData datos para actualizar
 */
const updateData = (index, updatedData) => {
  data[index] = { ...data[index], ...updatedData };
};

/**
 * Exporta las funciones que hemos creado para que sean visibles desde otros archivos JS
 */
module.exports = { listData, createData, deleteData, getData, updateData };
