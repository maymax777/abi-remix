import React from 'react'
import { toast, Id } from 'react-toastify'

import { CircleCheckIcon, WarningIcon } from 'design-systems/Atoms/Icons/Icons'

export function useToast() {
  const loadingToast = (text: string) => {
    return toast.loading(text, {
      className: 'text-neutral-100 dark:text-neutral-700 bg-neutral-700 dark:bg-neutral-100',
    })
  }

  const updateToast = (toastId: Id, text: string, type: 'success' | 'warning') => {
    toast.update(toastId, {
      render: text,
      type: type,
      isLoading: false,
      autoClose: 2000,
      className: 'text-neutral-100 dark:text-neutral-700 bg-neutral-700 dark:bg-neutral-100',
      progressClassName: '!bg-brand-800 !border-brand-800',
      icon: type === 'success' ? <CircleCheckIcon /> : <WarningIcon />,
    })
  }

  const warningToast = (text: string) => {
    toast.warn(text, {
      autoClose: 2000,
      className: 'text-neutral-100 dark:text-neutral-700 bg-neutral-700 dark:bg-neutral-100',
      progressClassName: '!bg-brand-800 !border-brand-800',
      icon: <WarningIcon />,
    })
  }

  const successToast = (text: string) => {
    toast.success(text, {
      autoClose: 2000,
      className: 'text-neutral-100 dark:text-neutral-700 bg-neutral-700 dark:bg-neutral-100',
      progressClassName: '!bg-brand-800 !border-brand-800',
      icon: <CircleCheckIcon />,
    })
  }

  return { loadingToast, updateToast, warningToast, successToast }
}
