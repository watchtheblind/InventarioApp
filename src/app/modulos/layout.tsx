'use client'
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar'
export default function ModulosLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div style={{display: 'flex', height: '100%', minHeight: '400px'}}>
          <Sidebar>
            <Menu>
              <MenuItem> Documentation</MenuItem>
              <MenuItem> Calendar</MenuItem>
              <MenuItem> E-commerce</MenuItem>
              <MenuItem> Examples</MenuItem>
            </Menu>
          </Sidebar>
          <main style={{padding: 10}}> Main content</main>
        </div>
      </body>
    </html>
  )
}
