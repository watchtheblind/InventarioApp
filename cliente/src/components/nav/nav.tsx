import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'

export function Nav() {
  return (
    <nav className="h-auto flex w-full text-white">
      <article className="bg-blue-800 flex justify-between flex-auto py-5 2xl:px-4 xl:px-4 lg:px-4 md:px-3 sm:px-2 px-2 w-full">
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
