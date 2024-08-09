import {TarjetaV} from '@/components/tarjetas/T-verde'
import {TarjetaD} from '@/components/tarjetas/T-dorada'
import {TarjetaR} from '@/components/tarjetas/T-roja'
import {TarjetaC} from '@/components/tarjetas/T-cyan'
import {TarjetaB} from '@/components/tarjetas/T-azul'
import {TarjetaM} from '@/components/tarjetas/T-morada'
import {TarjetaN} from '@/components/tarjetas/T-naranja'
import {TarjetaAM} from '@/components/tarjetas/T-a-marino'
import {TarjetaVO} from '@/components/tarjetas/T-v-oscuro'
import {TarjetaRO} from '@/components/tarjetas/T-r-oscuro'

const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="flex w-full 2xl:h-full xl:h-full lg:h-full md:h-auto sm:h-auto h-auto">
        <article className="h-full w-full">
          <article className="w-full h-full">
            <section className="flex justify-between items-center w-full 2xl:px-4 xl:px-4 lg:px-4 md:px-3 sm:px-2 px-2"></section>
            <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-y-4 gap-x-6 2xl:px-4 xl:px-4 lg:px-4 md:px-3 sm:px-2 px-2 pb-4">
              <TarjetaV></TarjetaV>
              <TarjetaD></TarjetaD>
              <TarjetaR></TarjetaR>
              <TarjetaC></TarjetaC>
              <TarjetaB></TarjetaB>
              <TarjetaM></TarjetaM>
              <TarjetaN></TarjetaN>
              <TarjetaAM></TarjetaAM>
              <TarjetaVO></TarjetaVO>
              <TarjetaRO></TarjetaRO>
            </section>
          </article>
        </article>
      </div>
    </div>
  )
}

export default Dashboard
