'use client'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {EsquemaProductos} from '@/app/hooks/EsquemaProductos'
import {z} from 'zod'
import {Form} from '@/components/ui/form'
import {CampoFormulario} from './camposFormulario'

type Props = {
  Boton: any
}

export const ModalCrearProducto: React.FC<Props> = (props) => {
  const form = useForm<z.infer<typeof EsquemaProductos>>({
    resolver: zodResolver(EsquemaProductos),
    defaultValues: {
      nombre: '',
      descripcion: '',
      _id: '',
      cantidad: 1,
      precio: 1,
    },
  })
  const {handleSubmit} = form

  function submitar(values: z.infer<typeof EsquemaProductos>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{props.Boton}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Crear producto nuevo
          </DialogTitle>{' '}
        </DialogHeader>
        <div className="grid gap-4 py-4 justify-center">
          <Form {...form}>
            <form onSubmit={handleSubmit(submitar)}>
              <CampoFormulario
                cantidadCaracteres={30}
                name="nombre"
                label="Nombre"
                placeholder="Impresora Epson 500"
                inputType="text"
              />
              <CampoFormulario
                cantidadCaracteres={7}
                name="precio"
                label="Precio"
                placeholder="500"
                inputType="number"
              />
              <CampoFormulario
                cantidadCaracteres={15}
                name="_id"
                label="Serial/ID"
                placeholder="12fD455g45B"
                inputType="text"
              />
              <CampoFormulario
                cantidadCaracteres={60}
                name="descripcion"
                label="Descripcion"
                placeholder="Esta es una impresora epson bien bonita"
                inputType="text"
              />
              <CampoFormulario
                cantidadCaracteres={5}
                name="cantidad"
                label="Cantidad"
                placeholder="1000"
                inputType="text"
              />
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-60 mt-3 bg-[#5C776B] rounded-full hover:bg-[#475D53] boton-login">
                  Guardar Datos
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
