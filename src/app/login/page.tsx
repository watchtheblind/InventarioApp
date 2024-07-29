'use client'
import Image from 'next/image'
import InicioSesionForm from '@/components/InicioSesionForm'

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
          <InicioSesionForm></InicioSesionForm>
          <p className="mt-4 text-xs text-slate-200 flex align-bottom">
            2024 - AppInventario
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
