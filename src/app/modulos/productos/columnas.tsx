/*Nota: Las columnas son el elemento central que define el aspecto que tendrá la tabla.
 Definen los datos que se mostrarán, cómo se formatearán, ordenarán y filtrarán.*/

'use client'

import {ColumnDef} from '@tanstack/react-table'
import {ArrowUpDown, MoreHorizontal} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {Checkbox} from '@/components/ui/checkbox'
import DetallesProducto from './detallesProducto'
import {DialogTrigger} from '@radix-ui/react-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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
    id: 'select',
    header: ({table}) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({row}) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'amount',
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)

      return <div className="text-left font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'id',
    header: 'id',
  },
  //menú desplegable:
  {
    id: 'Actions',
    header: 'Actions',
    cell: ({row}) => {
      const payment = row.original

      return (
        <DetallesProducto>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}>
                Copiar ID del producto
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Ver proveedor</DropdownMenuItem>
              <DialogTrigger asChild>
                <DropdownMenuItem>Ver detalles del producto</DropdownMenuItem>
              </DialogTrigger>
            </DropdownMenuContent>
          </DropdownMenu>
        </DetallesProducto>
      )
    },
  },
]
