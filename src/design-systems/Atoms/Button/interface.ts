import type { PropsWithChildren } from 'react'

export type ButtonSize = 'small' | 'medium' | 'large'

export type ButtonVariant = 'solid' | 'outlined'

export type ButtonColor = 'neon' | 'primary' | 'secondary'

export interface ButtonProps extends ButtonElementProps, PropsWithChildren {}

export type ButtonElementProps = Modify<
  React.HTMLProps<HTMLButtonElement>,
  {
    type?: 'button' | 'submit' | 'reset' | undefined
    loading?: boolean
    size?: ButtonSize
    variant?: ButtonVariant
    color?: ButtonColor
    fullWidth?: boolean
    className?: string
  }
>
