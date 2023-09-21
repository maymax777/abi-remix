import { classNames as cn } from 'utils'
import { Spinner } from '../Spinner/Spinner'
import { ButtonProps } from './interface'

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  color = 'primary',
  disabled = false,
  fullWidth = false,
  loading = false,
  size = 'medium',
  type = 'button',
  variant = 'solid',
  onClick,
}) => {
  const classNames = cn(
    'bg-teal-800 text-white font-bold py-1 px-4 rounded-t-lg',
    'hover:opacity-70',
    fullWidth && 'w-full',
    disabled ? 'cursor-auto' : 'cursor-pointer',
    'transition-all duration-75',
    'flex flex-row items-center justify-between',
    className
  )

  const spinnerClasses = 'stroke-neutral-100 dark:stroke-neutral-800 w-4 h-4'
  if (loading) disabled = true

  return (
    <button className={classNames} disabled={disabled} type={type} onClick={onClick}>
      {children}
      {loading && <Spinner className={spinnerClasses} />}
    </button>
  )
}
