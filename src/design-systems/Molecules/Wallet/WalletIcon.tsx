import { isMobile } from 'react-device-detect'
import NextImage from 'next/image'

import MetamaskImage from 'assets/metamask.svg'
import WalletConnectImage from 'assets/wallet-connect.svg'
import { classNames } from 'utils'

export interface WalletIconProps {
  className?: string
  withLabel?: boolean
  wallet?: string
}

export const WalletIcon: React.FC<WalletIconProps> = ({ className, withLabel = false, wallet = 'METAMASK' }) => {
  return (
    <div className={classNames(className, 'flex items-center')}>
      {WalletIcons[wallet]}
      {withLabel ? (
        <div className="font-RobotoCondensed text-body leading-paragraph pl-2 font-normal uppercase text-neutral-100 dark:text-neutral-700">
          {' '}
          {WalletLabels[wallet]}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

const WalletImage = isMobile ? WalletConnectImage : MetamaskImage
const WalletLabels = {
  METAMASK: isMobile ? 'WalletConnect' : 'Metamask',
}
const WalletIcons = {
  METAMASK: <NextImage alt="METAMASK" className="h-10 w-10" height={40} src={WalletImage} width={40} />,
}
