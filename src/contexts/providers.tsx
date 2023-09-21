import { ThemeProvider } from 'next-themes'
import { WagmiProvider } from './wagmi'
import { ABIProvider } from './abi-provider'

export const Providers = ({ children }) => (
  <ThemeProvider defaultTheme="system" attribute="class">
    <WagmiProvider>
      <ABIProvider>{children}</ABIProvider>
    </WagmiProvider>
  </ThemeProvider>
)
