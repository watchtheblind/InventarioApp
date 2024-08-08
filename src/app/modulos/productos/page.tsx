import {Productos, columnas} from './columnas'
import {DataTable} from './tabla'
import {cookies} from 'next/headers'
import {Toaster} from '@/components/ui/toaster'
async function traerDatos(token: any): Promise<Productos[]> {
  const buscarProductos = await fetch(
    'https://gestor-de-inventario.onrender.com/api/v1/productos',
    {
      method: 'GET',
      headers: {
        'x-access-token': token.value,
      },
    },
  )
  const productos = await buscarProductos.json()
  return productos
}

export default async function DemoPage() {
  const cookieStore = cookies()
  const data = await traerDatos(cookieStore.get('token'))
  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columnas} data={data} />
      </div>
      <Toaster />
    </>
  )
}
