import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Button} from '../ui/button'
export function Nav() {
  return (
    <header className="h-20 flex justify-between bg-blue-800 text-white">
      <div className="flex justify-start pl-4 xl:pl-4 lg:pl-4 md:pl-3 sm:pl-2">
        <Button className="text-base xl:text-base lg:text-base md:text-sm">
          Dez
        </Button>
      </div>
      <div className="flex justify-end pr-4 xl:pr-4,pl-4 lg:pr-4, md:pr-3 sm:pr-2 ">
        <ul className="flex gap-5 items-center">
          <li className="flex items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </li>
          <li className="text-base xl:text-base lg:text-base md:text-sm ">
            Nombre - Administrador
          </li>
        </ul>
        <button className="text-base ml-6 xl:text-base lg:text-base md:text-sm">
          LOGOUT
        </button>
      </div>
    </header>
  )
}
export default Nav
