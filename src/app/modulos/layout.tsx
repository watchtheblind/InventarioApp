'use client'
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar'
import {Nav} from '@/components/nav/nav'

export default function ModulosLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      className="2xl:max-h-screen xl:h-full lg:max-h-screen md:h-auto sm:h-auto max-h-screen">
      <body className="w-full">
        <header>
          <Nav></Nav>
        </header>
        <div className="h-full w-full flex border-4 border-green-600">
          <Sidebar className="flex w-96 2xl:h-full xl:h-full 2xl:w-[24.2rem] xl:w-[22.5rem] lg:w-[22rem] md:w-[17.8rem] sm:w-[16.9rem]">
            <Menu className="w-full">
              <MenuItem>Documentation</MenuItem>
              <MenuItem>Calendar</MenuItem>
              <MenuItem>E-commerce</MenuItem>
              <MenuItem>Examples</MenuItem>
            </Menu>
          </Sidebar>
          <main className="w-full"> {children} </main>
        </div>
      </body>
    </html>
  )
}
