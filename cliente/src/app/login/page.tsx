import Image from 'next/image'
import {Label} from '@/components/ui/label'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
export default function Login() {
  return (
    <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
      <div className="grid w-full h-full grid-cols-1 bg-white md:grid-cols-2">
        <div className="bg-[#16202a] text-white flex items-center justify-center flex-col">
          <div className="my-7">
            <h1 className="text-4xl font-semibold ">Inicio de Sesión</h1>
            <p className="mt-2 flex justify-center text-xs text-slate-400">
              introduzca sus datos para acceder
            </p>
          </div>
          <form>
            <Label htmlFor="email" className="text-base">
              Correo
            </Label>
            <Input
              className="mt-2 mb-5 w-80 bg-transparent rounded-full"
              type="email"
              id="email"
              placeholder="introduzca su correo aquí"
            />
            <Label htmlFor="password" className="text-base">
              Contraseña
            </Label>
            <Input
              className="mt-2 mb-5 w-80 bg-transparent rounded-full"
              type="password"
              id="password"
              placeholder="introduzca su contraseña aquí"
            />
            <Button
              type="submit"
              className="w-full mt-5 bg-[#5C776B] rounded-full hover:bg-[#475D53]">
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
