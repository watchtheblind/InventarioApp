import {productosSeleccionados} from '@/app/modulos/productos/columnas'
import {getCookie} from 'cookies-next'
export const BorrarDatos = async () => {
  console.log(productosSeleccionados)
  const token = getCookie('token')
  if (!token) {
    throw new Error('Token no encontrado')
  }
  console.log(token)
  const idsProductosSeleccionados = productosSeleccionados.map((producto) => ({
    id: producto._id,
  }))
  console.log(idsProductosSeleccionados)
  const response = await fetch(
    'https://gestor-de-inventario.onrender.com/api/v1/productos ',
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(idsProductosSeleccionados),
    },
  )

  if (response.ok) {
    console.log('Recurso eliminado con éxito')
    return response.json() // Devuelve la respuesta en formato JSON
  } else {
    console.error('Error al eliminar el recurso:', response.status)
    throw new Error(`Error ${response.status}`)
  }
}
