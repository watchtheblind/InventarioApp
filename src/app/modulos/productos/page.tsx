import {Table} from '@/components/ui/table'
import {Payment, columnas} from './columnas'
import {DataTable} from './tabla'

async function traerDatos(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
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
    <>
      <div>
        <div className="p-3 flex justify-start border border-blue-700">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            <svg
              className="w-6 h-6 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Agregar Nuevo/a
          </button>
          <button className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded ml-2">
            <svg
              className="w-6 h-6 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 17h2a2 2 0 002-2v-4.31a1 1 0 00-.46-.83L19.25 12l-2.31-2.31a1 1 0 00-.83-.46V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v4.31a1 1 0 00.46.83L12.75 12l2.31 2.31a1 1 0 00.83.46V17zm-6-6a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Imprimir Reporte
          </button>
        </div>
      </div>
      <Table></Table>
      <div className="container mx-auto py-10">
        <DataTable columns={columnas} data={data} />
      </div>
    </>
  )
}
