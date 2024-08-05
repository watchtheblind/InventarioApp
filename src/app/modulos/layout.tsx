'use client'
import {Nav} from '@/components/nav/nav'
import {Menu} from '@/components/menu/menu'

export default function ModulosLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="w-full h-full">
        <div className="2xl:h-full xl:h-full lg:h-full md:h-full sm:h-full w-full flex border-4 border-green-600">
          <div className="h-screen xl:w-1/6 lg:w-1/4 md:w-1/4 sm:w-1/4">
            <Menu></Menu>
          </div>
          <main className="w-full flex flex-col flex-auto lg:w-3/4 md:w-3/4 sm:w-3/4 h-auto">
            <Nav></Nav>
            <div className="w-full"> {children} </div>
          </main>
        </div>
      </body>
    </html>
  )
}
