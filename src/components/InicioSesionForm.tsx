'use client'
import React, {useEffect, useState} from 'react'
import {Button} from '@/components/ui/button'
import {useRouter} from 'next/navigation'
import {AlertDestructive} from '@/components/Alerta'
import {UpdateIcon} from '@radix-ui/react-icons'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import type {Control, FieldPath} from 'react-hook-form'
import {z} from '@/components/zod-es.js'

/* La declaración `const formSchema` crea un esquema utilizando la biblioteca Zod para la validación del formulario.
En este caso, define un objeto de esquema con dos campos: "correo electrónico" y "contraseña". */
const formSchema = z.object({
  correo: z.string().min(11).max(50),
  password: z.string().min(6).max(50),
})

const InicioSesionForm = () => {
  const [intentos, setIntentos] = useState(1)
  const [Error, setError] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [mensajeAlerta, setMensajeAlerta] = useState('Usuario no encontrado')
  const router = useRouter()
  const bloquearLogin = async () => {
    const elementosDelLogin = document.querySelectorAll('.elemento-login')
    elementosDelLogin.forEach((elementoDelLogin) => {
      elementoDelLogin.setAttribute('disabled', '')
    })
  }

  const desbloquearLoginEn10Segundos = async () => {
    await bloquearLogin()
    setTimeout(() => {
      const elementosDelLogin = document.querySelectorAll('.elemento-login')
      elementosDelLogin.forEach((elementoDelLogin) => {
        elementoDelLogin.removeAttribute('disabled')
      })
      setError((error) => !error)
    }, 10000)
  }
  /* Este fragmento de código utiliza el hook `useForm` de la biblioteca `react-hook-form` para crear un formulario
instancia para el formulario de inicio de sesión. */
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      correo: '',
      password: '',
    },
  })
  /* función para obtener los datos del formulario de inicio de sesion y mandarlos al servidor*/
  const obtenerDatosInicioSesion = async (
    values: z.infer<typeof formSchema>,
  ) => {
    const {correo, password} = values //values.correo y values.password
    try {
      setCargando(true)
      const response = await fetch(
        'https://gestor-de-inventario.onrender.com/api/v1/auth/login',
        {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({correo, password}),
        },
      )
      setCargando(false)
      response.ok
        ? (setIntentos(0), router.push('/modulos/dashboard'))
        : (() => {
            setError(true)
            setIntentos(intentos + 1)
            intentos === 3
              ? (setMensajeAlerta(
                  'Se ha excedido el número de intentos. Espere 10 segundos.',
                ),
                desbloquearLoginEn10Segundos())
              : ''
          })()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(obtenerDatosInicioSesion)}
          className=" justify-center space-y-4">
          <CampoFormulario
            cantidadCaracteres={30}
            name="correo"
            label="Correo Electrónico"
            placeholder="correo"
            inputType="email"
            formControl={form.control}
          />
          <CampoFormulario
            cantidadCaracteres={20}
            name="password"
            label="Contraseña"
            placeholder="Password"
            inputType="password"
            formControl={form.control}
          />
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-60 mt-3 bg-[#5C776B] rounded-full hover:bg-[#475D53] elemento-login">
              Iniciar Sesión
              {cargando ? (
                <UpdateIcon className="ml-2 animate-spin"></UpdateIcon>
              ) : (
                ''
              )}
            </Button>
          </div>
        </form>
      </Form>
      {Error ? (
        <div className="mt-4 visible animate-pulse">
          <AlertDestructive mensaje={mensajeAlerta} />
        </div>
      ) : (
        ''
      )}
    </>
  )
}

/* La `interfaz CampoFormularioProps` define los props que el componente `CampoFormulario`
espera recibir. */
interface CampoFormularioProps {
  name: FieldPath<z.infer<typeof formSchema>>
  label: string
  placeholder: string
  description?: string
  inputType?: string
  cantidadCaracteres: number
  formControl: Control<z.infer<typeof formSchema>, any>
}

// Definiendo la estructura de los campos del formulario
const CampoFormulario: React.FC<CampoFormularioProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  cantidadCaracteres,
  formControl,
}) => {
  return (
    <>
      <FormField
        control={formControl}
        name={name}
        render={({field}) => (
          <FormItem>
            <FormLabel className="text-base">{label}</FormLabel>
            <FormControl>
              <Input
                maxLength={cantidadCaracteres}
                className="mt-2 mb-5 w-80 bg-transparent rounded-full elemento-login"
                placeholder={placeholder}
                type={inputType || 'text'}
                {...field}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
export default InicioSesionForm
