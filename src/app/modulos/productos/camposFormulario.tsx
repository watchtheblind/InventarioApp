import React from 'react'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {useFormContext} from 'react-hook-form'
import type {FieldPath} from 'react-hook-form'
import {z} from '@/components/zod-es.js'
import {EsquemaProductos} from '@/app/hooks/productos/EsquemaProductos'
interface CampoFormularioProps {
  name: FieldPath<z.infer<typeof EsquemaProductos>>
  label: string
  placeholder: string
  description?: string
  inputType?: any
  cantidadCaracteres: number
}

export const CampoFormulario: React.FC<CampoFormularioProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  cantidadCaracteres,
}) => {
  const {control} = useFormContext()
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({field}) => (
          <FormItem>
            <FormLabel className="text-base">{label}</FormLabel>
            <FormControl>
              <Input
                maxLength={cantidadCaracteres}
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
