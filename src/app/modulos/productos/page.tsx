import {Table} from '@/components/ui/table'
import {Payment, columnas} from './columnas'
import {DataTable} from './tabla'

async function traerDatos(): Promise<Payment[]> {
  const productos = await fetch(
    'https://gestor-de-inventario.onrender.com/api/v1/productos',
    {
      method: 'GET',
      headers: new Headers({
        'x-access-token': '',
      }),
    },
  )
  const respuesta = await productos.json()
  // .catch((error) => console.error(error))
  return [
    {
      id: respuesta.productos[0]._id,
      amount: 100,
      status: 'pending',
      email: 'm@example.com',
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await traerDatos()
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columnas} data={data} />
    </div>
  )
}
