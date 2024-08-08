import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {EsquemaProductos} from '@/app/hooks/productos/EsquemaProductos'
import {z} from 'zod'
import {Form} from '@/components/ui/form'
import {CampoFormulario} from './camposFormulario'
import {getCookie} from 'cookies-next'
import {useState, useEffect} from 'react'
import {useToast} from '@/components/ui/use-toast'

type Props = {
  Boton: any
}

export const ModalCrearProducto: React.FC<Props> = (props) => {
  const [abierto, setAbierto] = useState(false)
  const {toast} = useToast()

  const guardarDatos = (campos: z.infer<typeof EsquemaProductos>) => {
    const token = getCookie('token')

    const {nombre, precio, cantidad, descripcion} = campos
    if (!token) {
      throw new Error('Token no encontrado')
    }
    fetch('https://gestor-de-inventario.onrender.com/api/v1/productos', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify({nombre, precio, cantidad, descripcion}),
    })
      .then(() => {
        setAbierto(false)
        toast({
          title: '¡Datos guardados con exito! 😜',
          description: nombre,
        })
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          title: '¡Ups! parece que ocurrió un error 🤔',
          description: error,
        })
      })
  }

  const form = useForm<z.infer<typeof EsquemaProductos>>({
    resolver: zodResolver(EsquemaProductos),
    defaultValues: {
      nombre: '',
      descripcion: '',
    },
  })
  const {handleSubmit} = form

  return (
    <Dialog open={abierto} onOpenChange={setAbierto}>
      <DialogTrigger asChild>{props.Boton}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Crear producto nuevo
          </DialogTitle>{' '}
        </DialogHeader>
        <div className="grid gap-4 py-4 justify-center">
          <Form {...form}>
            <form onSubmit={handleSubmit(guardarDatos)}>
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
                inputType="number"
              />
              <div className="flex justify-center mt-3">
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
