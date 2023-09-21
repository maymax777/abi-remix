type Modify<T, R extends PartialAny<T>> = Omit<T, keyof R> & R

interface ABIChild {
  internalType: string
  name: string
  type: string
}
