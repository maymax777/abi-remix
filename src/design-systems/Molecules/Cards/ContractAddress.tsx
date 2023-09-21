import CheckIcon from '@heroicons/react/24/outline/CheckIcon'
import { useABI } from 'contexts/abi-provider'
import { useRef } from 'react'
import { Address } from 'wagmi'

export const ContractAddress = () => {
  const addressRef = useRef<HTMLInputElement>(null)
  const { setContractAddress } = useABI()

  const handleCheckAddress = () => {
    const address = addressRef.current.value
    setContractAddress(address as Address)
  }

  return (
    <div className="my-4 flex w-full flex-col gap-1 rounded-lg bg-neutral-300 p-4">
      <p className="text-sm">Contract Address: </p>
      <div className="flex w-full flex-row">
        <input className="w-full rounded-md bg-neutral-400 px-2 text-sm outline-none" ref={addressRef} />
        <CheckIcon className="h-6 w-6 cursor-pointer hover:scale-110" onClick={handleCheckAddress} />
      </div>
    </div>
  )
}
