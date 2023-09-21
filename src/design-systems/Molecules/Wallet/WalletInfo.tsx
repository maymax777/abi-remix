import { useCallback } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { WalletIcon } from './WalletIcon'

import { CopyIcon } from 'design-systems/Atoms/Icons/Icons'
import { classNames, shortWalletAddress } from 'utils'
import { useToast } from 'hooks/use-toast'

export interface WalletInfoProps {
  chain: string
  className?: string
  wallet?: string
  walletAddress?: string
  chainClassName?: string
  walletClassName?: string
}

export const WalletInfo: React.FC<WalletInfoProps> = ({
  className,
  wallet = 'METAMASK',
  walletAddress,
  chain,
  chainClassName = 'text-neutral-400 dark:text-neutral-500',
  walletClassName = 'text-neutral-100 dark:text-neutral-700',
}) => {
  const { successToast } = useToast()

  const handleCopy = useCallback(() => {
    successToast('Copied your wallet address')
  }, [successToast])

  return (
    <div className={classNames(className, 'flex items-center gap-2')}>
      <WalletIcon wallet={wallet} withLabel={false} />

      <div className="pl-2">
        <div className={classNames('font-RobotoCondensed leading-subtitle text-xs font-normal', chainClassName)}>
          {chain}
        </div>
        <div className={classNames('font-RobotoCondensed text-caption leading-subtitle font-normal', walletClassName)}>
          {walletAddress ? shortWalletAddress(walletAddress) : ''}
        </div>
      </div>

      {walletAddress && (
        <CopyToClipboard text={walletAddress} onCopy={handleCopy}>
          <CopyIcon
            className="cursor-pointer stroke-neutral-500 hover:stroke-neutral-100 dark:hover:stroke-neutral-700"
            height={20}
            width={20}
          />
        </CopyToClipboard>
      )}
    </div>
  )
}
