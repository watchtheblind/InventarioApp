'use client'
import React, {useState} from 'react'
import {Button} from '@/components/ui/button'
import {useRouter} from 'next/navigation'
import {AlertDestructive} from '@/components/Alerta'
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
  correo: z.string().min(11).max(40),
  password: z.string().min(6).max(50),
})

const InicioSesionForm = () => {
  const [Error, setError] = useState(false)
  const router = useRouter()
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
      const response = await fetch(
        'https://gestor-de-inventario.onrender.com/api/v1/auth/login',
        {
          method: 'POST',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({correo, password}),
        },
      )
      response.ok ? router.push('/modulos/dashboard') : setError(true)
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
          <SignupFormField
            name="correo"
            label="Correo Electrónico"
            placeholder="correo"
            inputType="email"
            formControl={form.control}
          />
          <SignupFormField
            name="password"
            label="Contraseña"
            placeholder="Password"
            inputType="password"
            formControl={form.control}
          />
          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-60 mt-3 bg-[#5C776B] rounded-full hover:bg-[#475D53]">
              Iniciar Sesión
            </Button>
          </div>
        </form>
      </Form>
      <p className="mt-4 text-xs text-slate-200">
        2024 - SISTEMA DE INVENTARIO
      </p>
      <div className={Error ? 'visible' : 'invisible'}>
        <AlertDestructive mensaje="Usuario no encontrado" />
      </div>
    </>
  )
}

/* La `interfaz SignupFormFieldProps` define los props que el componente `SignupFormField`
espera recibir. */
interface SignupFormFieldProps {
  name: FieldPath<z.infer<typeof formSchema>>
  label: string
  placeholder: string
  description?: string
  inputType?: string
  formControl: Control<z.infer<typeof formSchema>, any>
}
const SignupFormField: React.FC<SignupFormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
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
                className="mt-2 mb-5 w-80 bg-transparent rounded-full"
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
