import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export const crearPDF = (datosProductos) => {
  //obtenemos los productos que están en nuestra tabla y los convertimos a un array, para que el body pueda
  //procesar correctamente la información por columna
  let listaProductos = datosProductos.map((producto) => [
    producto._id,
    producto.nombre,
    producto.precio,
    producto.cantidad,
    producto.descripcion,
  ])
  const doc = new jsPDF()
  //definimos la estructura del documento
  autoTable(doc, {
    head: [['Serial/ID', 'Nombre', 'Precio', 'Cantidad', 'Descripcion']],
    body: listaProductos,
  })
  //guardamos el documento
  doc.save('Productos.pdf')
}
