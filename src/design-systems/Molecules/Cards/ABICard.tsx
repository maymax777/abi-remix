import { Button } from 'design-systems/Atoms/Button/Button'
import { useState } from 'react'
import { InputList } from '../Lists/InputList'
import { useABI } from 'contexts/abi-provider'
import { useChainId, useContractRead, useContractWrite, usePrepareContractWrite, useSigner } from 'wagmi'
import { OutputList } from '../Lists/OutputList'

export interface ABICardProps {
  inputs: ABIChild[]
  name: string
  outputs: ABIChild[]
  payable: boolean
  signature: string
  stateMutability: 'pure' | 'view' | 'constant' | 'nonpayable' | 'payable'
  type: 'function' | 'event' | 'constructor' | 'fallback'
}

export const ABICard: React.FC<ABICardProps> = ({
  inputs,
  name,
  outputs,
  payable,
  signature,
  stateMutability,
  type,
}) => {
  const { contractAddress, abi } = useABI()
  const { data: signer } = useSigner()
  const chainId = useChainId()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [args, setArgs] = useState<(string | bigint)[]>(inputs.map(() => ''))

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    abi: abi as any,
    functionName: name,
    args: args,
    signer,
    chainId,
  })
  const { write, isLoading: isLoadingWrite } = useContractWrite(config)

  const {
    data,
    isLoading: isLoadingRead,
    refetch,
  } = useContractRead({
    address: contractAddress,
    abi: abi as any,
    functionName: name,
    enabled: isOpen && inputs.length === 0,
    args: args,
  })

  const handleClickCard = () => {
    if (contractAddress) {
      setIsOpen(!isOpen)
    } else {
      setIsOpen(false)
    }
  }

  const handleClickCall = (args: string[]) => {
    setArgs(args)
    if (payable) write?.()
    else refetch()
  }

  const isLoading = isLoadingRead || isLoadingWrite

  if (!name) return <></>

  return (
    <div className="w-full p-2">
      <div className="h-full rounded-lg bg-neutral-300">
        <Button fullWidth onClick={handleClickCard} loading={isLoading}>
          {name}
        </Button>
        {isOpen && (
          <div className="w-full">
            <InputList inputs={inputs} payable={payable} onCallContract={handleClickCall} isLoading={isLoading} />
            {<OutputList outputs={outputs} data={data} isLoading={isLoading} />}
          </div>
        )}
      </div>
    </div>
  )
}
