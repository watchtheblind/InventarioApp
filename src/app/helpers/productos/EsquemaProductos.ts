import {z} from 'zod'

export const EsquemaProductos = z.object({
  nombre: z
    .string()
    .min(1, {message: 'El campo no puede estar vacío'})
    .max(50, {message: 'El nombre no debe exceder de 50 caracteres'}),
  precio: z.string({
    required_error: 'Se necesita el precio',
    invalid_type_error: 'Formato inválido de precio',
  }),
  descripcion: z
    .string()
    .min(10, {message: 'La descripción debe tener al menos 10 caracteres'})
    .max(50, {message: 'La descripción no debe exceder de 50 caracteres'}),
  cantidad: z.string({
    required_error: 'Se necesita la cantidad',
    invalid_type_error: 'Formato inválido de cantidad',
  }),
})
