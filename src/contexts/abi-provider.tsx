import { PropsWithChildren, useContext, createContext, useState } from 'react'
import { Address } from 'wagmi'

interface ABIProviderProps extends PropsWithChildren {}

export interface ABIContextState {
  abi: JSON
  contractAddress: Address
  setABI: (_: JSON) => void
  setContractAddress: (_: Address) => void
}

export const ABIContext = createContext<ABIContextState>({
  abi: null,
  contractAddress: null,
  setABI: (_: JSON) => {},
  setContractAddress: (_: Address) => {},
})

export const useABI = () => useContext(ABIContext)

export const ABIProvider: React.FC<ABIProviderProps> = ({ children }) => {
  const [abi, setABI] = useState<JSON>(null)
  const [contractAddress, setContractAddress] = useState<Address>(null)

  return (
    <ABIContext.Provider
      value={{
        abi,
        setABI,
        contractAddress,
        setContractAddress,
      }}
    >
      {children}
    </ABIContext.Provider>
  )
}
