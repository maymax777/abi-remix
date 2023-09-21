import { configureChains } from 'wagmi'
import { mainnet, goerli } from 'wagmi/chains'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'
import { INFURA_PROJECT_ID, IS_PRODUCTION } from './constants'

export const CHAIN_IDS = {
  mainnet: 1,
  goerli: 5,
} as const

export const WAGMI_CHAINS = {
  [CHAIN_IDS.mainnet]: mainnet,
  [CHAIN_IDS.goerli]: goerli,
} as const

export const DEFAULT_ETHEREUM_CHAIN_ID = IS_PRODUCTION ? CHAIN_IDS.mainnet : CHAIN_IDS.goerli

export const SUPPORTED_WAGMI_CHAINS = [WAGMI_CHAINS[DEFAULT_ETHEREUM_CHAIN_ID]]

export const {
  chains: CONFIGURED_WAGMI_CHAINS,
  provider: WAGMI_PROVIDER,
  webSocketProvider: WAGMI_WS_PROVIDER,
} = configureChains(SUPPORTED_WAGMI_CHAINS, [
  infuraProvider({ apiKey: `${INFURA_PROJECT_ID ?? ''}` }),
  publicProvider(),
])
