import { useAccount, useNetwork } from 'wagmi'
import { useABI } from 'contexts/abi-provider'
import { ABICard } from 'design-systems/Molecules/Cards/ABICard'
import { ContractAddress } from 'design-systems/Molecules/Cards/ContractAddress'
import { WalletInfo } from 'design-systems/Molecules/Wallet/WalletInfo'

interface SidePanelProps {}

export const SidePanel: React.FC<SidePanelProps> = () => {
  const { abi, contractAddress } = useABI()
  const { chain } = useNetwork()
  const { address } = useAccount()

  return (
    <div className="flex h-screen w-[400px] flex-col items-center justify-start overflow-scroll border-l-4 border-neutral-400 bg-neutral-200 p-2">
      {abi && <WalletInfo className="my-2" chain={chain.name} walletAddress={address} />}
      {abi && <ContractAddress />}
      {abi && contractAddress && Object.keys(abi).map(key => <ABICard key={key} {...abi[key]} />)}
    </div>
  )
}
