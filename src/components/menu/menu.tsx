import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'

export function Menu() {
  return (
    <article className="h-full fixed text-white bg-gray-950 2xl:1/6 xl:w-1/6 lg:w-1/4 md:w-1/4 sm:w-1/4">
      <div className="min-h-20 bg-black text-2xl flex justify-center items-center">
        InventarioAPP
      </div>

      {/* Menu exportado */}
      <Command className="h-full fixed text-white bg-gray-950 2xl:1/6 xl:w-1/6 lg:w-1/4 md:w-1/4 sm:w-1/4">
        {/* PRIMERA TANDA DE BOTONES */}
        <article className="py-5 px-3 flex flex-col gap-2">
          <h3 className="text-xs ml-3 pb-2 text-gray-400">Sugerencias</h3>
          <button className="flex items-center py-1 ml-2 text-base w-full hover:bg-gray-500 active:text-gray-400 active:bg-slate-800">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </button>
          <button className="flex items-center py-1 ml-2 text-base w-full hover:bg-gray-500 active:text-gray-400 active:bg-slate-800">
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </button>
          <button className="flex items-center py-1 ml-2 text-base w-full hover:bg-gray-500 active:text-gray-400 active:bg-slate-800">
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </button>
        </article>
        <CommandSeparator />

        {/*Segunda tanda de botones */}
        <article className="py-5 px-3 flex flex-col gap-2">
          <h3 className="text-xs ml-3 pb-2 text-gray-400">Configuraciones</h3>
          {/*Segunda tanda de botones 2.1 */}
          <button className="flex justify-between items-center py-1 ml-2 text-base w-full hover:bg-gray-500 active:text-gray-400 active:bg-slate-800">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </div>
            <div className="mr-4 flex items-center text-sm">⌘P</div>
          </button>

          {/*Segunda tanda de botones 2.2 */}
          <button className="flex justify-between items-center py-1 ml-2 text-base w-full hover:bg-gray-500 active:text-gray-400 active:bg-slate-800">
            <div className="flex items-center">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </div>
            <div className="mr-4 flex items-center text-sm">⌘B</div>
          </button>

          {/*Segunda tanda de botones 2.3 */}
          <button className="flex justify-between items-center py-1 mx-2 text-base w-full hover:bg-gray-600 active:text-gray-400 active:bg-slate-800">
            <div className="flex gap-2 items-center">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </div>
            <div className="mr-4 flex items-center text-sm">⌘S</div>
          </button>
        </article>
      </Command>
    </article>
  )
}
export default Menu
