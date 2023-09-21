import { CircleIcon } from '../Icons/Icons'

export interface SpinnerProps {
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({ className = '' }) => {
  return <CircleIcon className={`animate-spin ${className}`} />
}
