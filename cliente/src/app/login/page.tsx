import Image from 'next/image'
import {Label} from '@/components/ui/label'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
export default function Login() {
  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white md:grid-cols-2">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <div className="my-4">
            <h1 className="text-3xl font-semibold ">Inicio de Sesión</h1>
            <p className="mt-2 text-xs text-slate-400">
              introduzca sus datos para acceder.
            </p>
          </div>
          <form>
            <Label htmlFor="email">Introduzca su correo electrónico</Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full"
              type="email"
              id="email"
              placeholder="email"
            />
            <Label htmlFor="password">Introduzca su contraseña</Label>
            <Input
              className="mt-2 mb-4 bg-transparent rounded-full"
              type="password"
              id="password"
              placeholder="contraseña"
            />
            <Button
              type="submit"
              className="w-full mt-5 bg-indigo-600 rounded-full hover:bg-indigo-700">
              Iniciar Sesión
            </Button>
          </form>
          <p className="mt-4 text-xs text-slate-200">
            2024 - SISTEMA DE INVENTARIO
          </p>
        </div>
        <div className="relative hidden md:block">
          <Image
            className="object-cover "
            fill={true}
            src="/bg2.jpg"
            alt="bg-image"
          />
        </div>
      </div>
    </main>
  )
}
