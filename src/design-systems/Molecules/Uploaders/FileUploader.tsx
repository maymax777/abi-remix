import React, { useState } from 'react'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentArrowDownIcon'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'

import { InfoIcon, PlusIcon } from 'design-systems/Atoms/Icons/Icons'
import { Spinner } from 'design-systems/Atoms/Spinner/Spinner'
import { classNames as cn } from 'utils'
import { useAccount } from 'wagmi'

export interface FileUploaderProps {
  className?: string
  label?: string
  uploadFileName?: string
  uploading?: boolean
  value?: string
  onFileSelect?: (file: File) => void
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  className,
  label = 'Upload ABI',
  uploadFileName,
  value,
  onFileSelect,
}) => {
  const { isConnected } = useAccount()
  const fileInputRef = React.useRef<HTMLInputElement>(null)
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string>('')
  const isImported = !!value

  const classNames = cn(className, 'w-full rounded-lg transition-all duration-75')

  const dropdownZoneClassName = cn(
    'rounded-sm',
    !isImported && 'border-2 border-dashed border-neutral-600 dark:border-neutral-400 overflow-hidden',
    !isImported && 'hover:bg-neutral-700 dark:hover:bg-neutral-300',
    !isImported && 'cursor-pointer',
    'h-[200px] w-[200px]',
    'flex flex-col items-center justify-center gap-2',
    'mb-md'
  )

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])

    if (files.length > 0) {
      setIsSelected(true)
      setFileName(files[0].name)
      onFileSelect(files[0])
    }
  }

  const onDeleteFileHandler = () => {
    setIsSelected(false)
    setFileName('')
    onFileSelect(null)
  }

  return (
    <div className="m-2 flex flex-col items-center">
      {!isConnected && <p className="m-2 text-base text-red-300">Please connect wallet before uploading ABI</p>}
      {isSelected ? (
        <div className="flex items-center justify-between rounded-lg bg-neutral-700 px-3 py-4 shadow-md dark:bg-neutral-200">
          <div className="flex items-center justify-center space-x-1">
            <DocumentDuplicateIcon className="h-8 w-8" />
            <p className="w-fit truncate break-all text-center text-neutral-100 dark:text-neutral-500">
              {fileName && fileName}
            </p>
          </div>
          <TrashIcon className="h-7 w-7 cursor-pointer" onClick={onDeleteFileHandler} />
        </div>
      ) : (
        <label
          className={`flex cursor-pointer flex-col items-center justify-center ${dropdownZoneClassName} ${classNames}`}
          htmlFor="fileSelect"
        >
          <PlusIcon className="h-8 w-8 stroke-neutral-400 dark:stroke-neutral-500" />
          <p className="m-8 text-center text-neutral-400 dark:text-neutral-500">{label}</p>
          <input
            className="h-full w-full p-4"
            disabled={!isConnected}
            id="fileSelect"
            name={uploadFileName}
            ref={fileInputRef}
            style={{ display: 'none' }}
            type="file"
            onChange={e => handleFileSelect(e)}
          />
        </label>
      )}
    </div>
  )
}
