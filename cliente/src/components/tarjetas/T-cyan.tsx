import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function TarjetaC() {
  return (
    <Card className="text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] cursor-pointer hover:contrast-100 hover:scale-110 duration-150">
      <CardContent className="w-full flex items-center bg-cyan-600 p-0">
        <CardHeader className="w-3/6 pr-0">
          {/* Cantidad almacenada (fluctuante)*/}
          <CardTitle className="text-5xl">3</CardTitle>

          {/* descripcion del objeto (fluctuante)*/}
          <CardDescription className="m-0 text-white 2xl:text-base xl:text-base lg:text-base md:text-sm text-sm">
            Card Description
          </CardDescription>
        </CardHeader>

        <section className="flex w-3/6 justify-center">IMAGEN</section>
      </CardContent>
      <CardFooter className="flex items-center justify-center bg-cyan-800 py-2">
        <p className="2xl:text-base xl:text-base lg:text-base md:text-sm text-sm">
          More info
        </p>
      </CardFooter>
    </Card>
  )
}
export default TarjetaC
