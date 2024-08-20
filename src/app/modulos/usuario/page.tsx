import React from 'react'
import Link from 'next/link'
import {Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Input} from '@/components/ui/input'

const PanelUsuario = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Opciones</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0">
            <Link href="#" className="font-semibold text-primary">
              General
            </Link>
            {/* <Link href="#">Seguridad</Link> */}
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Correo electrónico</CardTitle>
                <CardDescription>
                  Cambia tu correo electrónico aquí abajo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <Input placeholder="Correo Electrónico" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Guardar</Button>
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Contraseña</CardTitle>
                <CardDescription>
                  Para cambiar tu contraseña, llena todos los campos de abajo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input placeholder="Contraseña" defaultValue="" />
                  <Input
                    placeholder="Vuelve a introducir tu contraseña"
                    defaultValue=""
                  />
                  <Input placeholder="Nueva contraseña" defaultValue="" />
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Guardar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PanelUsuario
