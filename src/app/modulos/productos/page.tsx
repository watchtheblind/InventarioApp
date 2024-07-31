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
    <div className="container mx-auto py-10">
      <DataTable columns={columnas} data={data} />
    </div>
  )
}
