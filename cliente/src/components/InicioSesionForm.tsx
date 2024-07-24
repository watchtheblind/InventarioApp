'use client'
import React from 'react'
import {Button} from '@/components/ui/button'
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

const formSchema = z.object({
  email: z.string().min(11).max(320),
  password: z.string().min(6).max(15),
})

const InicioSesionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const obtenerDatosLogin = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(obtenerDatosLogin)}
        className=" justify-center space-y-4">
        <SignupFormField
          name="email"
          label="Email"
          placeholder="Email"
          inputType="email"
          formControl={form.control}
        />
        <SignupFormField
          name="password"
          label="Password"
          placeholder="Password"
          inputType="password"
          formControl={form.control}
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            className='className="w-full w-60 mt-3 bg-[#5C776B] rounded-full hover:bg-[#475D53]"'>
            Iniciar Sesión
          </Button>
        </div>
      </form>
    </Form>
  )
}

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
  )
}
export default InicioSesionForm
