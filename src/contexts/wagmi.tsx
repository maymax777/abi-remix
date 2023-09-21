/* eslint-disable sort-keys */
import { PropsWithChildren } from 'react'
import { WagmiConfig, createClient } from 'wagmi'

import { CONFIGURED_WAGMI_CHAINS as chains, WAGMI_PROVIDER, WAGMI_WS_PROVIDER } from 'utils'
import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit'
import { app } from 'utils/app-config'
import {
  braveWallet,
  coinbaseWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'

const otherWallets = [
  braveWallet({ chains }),
  ledgerWallet({ chains }),
  coinbaseWallet({ chains, appName: app.name }),
  rainbowWallet({ chains }),
]

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [injectedWallet({ chains }), metaMaskWallet({ chains }), walletConnectWallet({ chains })],
  },
  {
    groupName: 'Other Wallets',
    wallets: otherWallets,
  },
])

const wagmiClient = createClient({
  connectors,
  provider: WAGMI_PROVIDER,
  webSocketProvider: WAGMI_WS_PROVIDER,
})

export const WagmiProvider = ({ children }: PropsWithChildren) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        appInfo={{
          appName: app.name,
          learnMoreUrl: app.url,
        }}
        chains={chains}
        showRecentTransactions={true}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
