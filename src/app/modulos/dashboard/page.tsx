import {Tarjetas} from '@/components/tarjetas/tarjetas'

const Dashboard = () => {
  //   const [colapsado, setColapsado] = useState(false)
  return (
    <div className="w-full border border-blue-500">
      <div className="flex w-full 2xl:h-full xl:h-full lg:h-full md:h-auto sm:h-auto h-auto">
        <article className="h-full w-full">
          <article className="w-full h-full">
            <section className="flex justify-between items-center w-full 2xl:px-4 xl:px-4 lg:px-4 md:px-3 sm:px-2 px-2">
              <div className="flex items-end 2xl:gap-3 xl:gap-3 lg:gap-3 gap-2 py-4">
                <h1 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg sm:text-lg text-md">
                  Dashboard
                </h1>
                <span className="text-gray-400">Control panel</span>
              </div>
              <div className="flex items-end gap-2">
                <button>Home</button>
                <span>-</span>
                <span className="text-gray-400">Dashboard</span>
              </div>
            </section>
            <section className="border border-red-500 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-y-4 gap-x-6 2xl:px-4 xl:px-4 lg:px-4 md:px-3 sm:px-2 px-2 pb-4">
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
              <Tarjetas></Tarjetas>
            </section>
          </article>
        </article>
      </div>
    </div>
  )
}

export default Dashboard
