import {z} from 'zod'
import {Form, useForm} from 'react-hook-form'

export const EsquemaProductos = z.object({
  nombre: z
    .string()
    .min(1, {message: 'El campo no puede estar vacío'})
    .max(50, {message: 'El nombre no debe exceder de 50 caracteres'}),
  precio: z
    .number({
      required_error: 'Un número es requerido',
      invalid_type_error: 'La cantidad debe ser un número',
    })
    .positive()
    .safe(),
  _id: z
    .string()
    .min(10, {message: 'La descripción debe tener al menos 10 caracteres'})
    .max(50, {message: 'La descripción no debe exceder de 50 caracteres'})
    .toLowerCase(),
  descripcion: z
    .string()
    .min(10, {message: 'La descripción debe tener al menos 10 caracteres'})
    .max(50, {message: 'La descripción no debe exceder de 50 caracteres'}),
  cantidad: z
    .number({
      required_error: 'Un número es requerido',
      invalid_type_error: 'La cantidad debe ser un número',
    })
    .positive()
    .safe(),
})
