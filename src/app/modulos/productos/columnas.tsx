/*Nota: Las columnas son el elemento central que define el aspecto que tendrá la tabla.
 Definen los datos que se mostrarán, cómo se formatearán, ordenarán y filtrarán.*/

'use client'

import {ColumnDef} from '@tanstack/react-table'

/* Este tipo se utiliza para definir la forma de nuestros datos.
Si desea, puede utilizar un esquema Zod aquí. */
export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

export const columnas: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
]
