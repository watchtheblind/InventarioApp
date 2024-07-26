import {ExclamationTriangleIcon} from '@radix-ui/react-icons'

import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
interface AlertDestructiveProps {
  mensaje: string
}
export function AlertDestructive(props: AlertDestructiveProps) {
  return (
    <Alert variant="destructive" className="h-15 w-60">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertDescription className="flex justify-center">
        {props.mensaje}
      </AlertDescription>
    </Alert>
  )
}
