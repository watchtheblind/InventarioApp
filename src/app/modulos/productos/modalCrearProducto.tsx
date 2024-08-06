'use client'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {Button} from '@/components/ui/button'
import {useForm} from 'react-hook-form'
type Props = {
  Boton: any
}
export const ModalCrearProducto: React.FC<Props> = (props) => {
  const {register, handleSubmit} = useForm()
  return (
    <Dialog>
      <DialogTrigger asChild>{props.Boton}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Crear producto nuevo
          </DialogTitle>{' '}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form
            onSubmit={handleSubmit((datos) => {
              console.log(datos)
            })}>
            <Label htmlFor="producto-nombre">Nombre</Label>
            <Input id="producto-nombre" {...register('nombre')}></Input>
            <Label htmlFor="producto-precio">Precio</Label>
            <Input
              type="number"
              id="producto-precio"
              {...register('precio')}></Input>
            <Label htmlFor="producto-id">Serial/Id</Label>
            <Input id="producto-id" {...register('_id')}></Input>
            <Label htmlFor="producto-descripcion">Descripcion</Label>
            <Input
              id="producto-descripcion"
              {...register('descripcion')}></Input>
            <Label htmlFor="producto-cantidad">Cantidad de unidades</Label>
            <Input
              type="number"
              id="producto-cantidad"
              {...register('cantidad')}></Input>
            <Button type="submit"></Button>
          </form>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
