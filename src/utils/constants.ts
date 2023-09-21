import { parseBoolean } from './helpers'

export const IS_PRODUCTION = parseBoolean(process.env.NEXT_PUBLIC_IS_PRODUCTION)
export const INFURA_PROJECT_ID = process.env.NEXT_PUBLIC_INFURA_ID ?? ''
