import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'

export function Nav() {
  return (
    <nav className="h-auto flex w-full text-white">
      <h1 className="2xl:px-20 xl:px-[4.3rem] lg:px-14 md:px-12 sm:px-10 px-[1.6rem] 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg sm:text-lg text-md bg-blue-900 h-full w-auto py-4">
        InventarioApp
      </h1>
      <article className="bg-blue-800 flex justify-between flex-auto 2xl:px-4 xl:px-4 lg:px-4 md:px-3 sm:px-2 px-2 w-full">
        <button className="2xl:text-base xl:text-base lg:text-base md:text-sm text-sm">
          Dez
        </button>
        <div className="flex gap-8 items-center">
          <ul className="flex gap-3 items-center">
            <li className="2xl:text-base xl:text-base lg:text-base md:text-sm text-sm">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </li>
            <li className="2xl:text-base xl:text-base lg:text-base md:text-sm text-sm">
              Nombre - Adminstrador
            </li>
          </ul>
          <button className="2xl:text-base xl:text-base lg:text-base md:text-sm text-sm">
            LOGOUT
          </button>
        </div>
      </article>
    </nav>
  )
}
export default Nav
