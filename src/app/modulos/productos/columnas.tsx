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

export type Productos = {
  _id: string
  nombre: string
  precio: number
  title: string
  descripcion: string
}
export let productosSeleccionados = {}

export const columnas: ColumnDef<Productos>[] = [
  {
    id: 'select',
    header: ({table}) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => {
          table.toggleAllPageRowsSelected(!!value)
          setTimeout(() => {
            const valoresDeFilasMarcadas = Object.values(
              table.getSelectedRowModel().rowsById,
            ).map((item) => item.original)
            productosSeleccionados = {...valoresDeFilasMarcadas}
            console.log(productosSeleccionados)
          }, 0)
        }}
        aria-label="Select all"
      />
    ),
    cell: ({row, table}) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => {
          row.toggleSelected(!!value)
          setTimeout(() => {
            const valoresDeFilasMarcadas = Object.values(
              table.getSelectedRowModel().rowsById,
            ).map((item) => item.original)
            productosSeleccionados = {...valoresDeFilasMarcadas}
            console.log(productosSeleccionados)
          }, 0)
        }}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'cantidad',
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          cantidad
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'precio',
    cell: ({row}) => {
      const precio = parseFloat(row.getValue('precio'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(precio)

      return <div className="text-left font-medium">{formatted}</div>
    },
    header: 'Precio',
  },
  {
    accessorKey: 'nombre',
    header: 'Nombre',
  },
  {
    accessorKey: '_id',
    header: 'Id',
  },
  {
    accessorKey: 'descripcion',
    header: 'Descripcion',
  },
  //menú desplegable:
  {
    id: 'Acciones',
    header: 'Acciones',
    cell: ({row}) => {
      const producto = row.original
      return (
        <DetallesProducto>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menú</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(producto._id)}>
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
