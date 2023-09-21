export function classNames(...classes: (false | null | undefined | string)[]): string {
  return classes.filter(Boolean).join(' ')
}

export const parseBoolean = (value?: string) => {
  return value && value.toLowerCase() === 'true'
}

export const shortWalletAddress = (walletAddress: string | undefined) => {
  return walletAddress ? walletAddress.substring(0, 5) + '...' + walletAddress.substring(walletAddress.length - 4) : ''
}
