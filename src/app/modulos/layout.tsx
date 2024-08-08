'use client'
import {Nav} from '@/components/nav/nav'

export default function ModulosLayout({children}: {children: React.ReactNode}) {
  return (
    <main className="w-full">
      <Nav></Nav>
      {children}
    </main>
  )
}
