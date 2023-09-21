import { Button } from 'design-systems/Atoms/Button/Button'
import { useState } from 'react'

interface InputItemProps extends ABIChild {
  value: string
  onInputChange: (_: string) => void
}

interface InputListProps {
  inputs: ABIChild[]
  payable: boolean
  isLoading: boolean
  onCallContract: (_: string[]) => void
}

const InputItem: React.FC<InputItemProps> = ({ name, type, value, onInputChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    onInputChange(newValue)
  }

  return (
    <div className="m-1 flex flex-row">
      <p className="w-1/3 p-1 text-right">{name}:</p>
      <input
        className="w-full rounded-md border border-gray-500 p-1 outline-none"
        placeholder={type}
        value={value} // Make it a controlled component
        onChange={handleInputChange} // Handle input changes
      />
    </div>
  )
}

export const InputList: React.FC<InputListProps> = ({ inputs, payable, onCallContract, isLoading }) => {
  const [args, setArgs] = useState<string[]>(inputs.map(() => ''))
  const isDirectCall = inputs.length === 0
  const buttonLabel = payable ? 'Transact' : 'Call'
  const buttonClassName = payable ? 'bg-red-400' : 'bg-primary-300'

  const handleCallContract = () => {
    onCallContract(args)
  }

  const handleInputChange = (index: number, value: string) => {
    const updatedValues = [...args]
    updatedValues[index] = value
    setArgs(updatedValues)
  }

  return (
    <div className="bg-blue-800">
      {!isDirectCall && <p className="p-2 text-sm uppercase underline">PARAMETERS</p>}
      {inputs.map((input, index) => (
        <InputItem
          key={index}
          {...input}
          value={args[index]}
          onInputChange={value => handleInputChange(index, value)}
        />
      ))}
      {!isDirectCall && (
        <div className="mt-4 flex w-full justify-end">
          <Button className={buttonClassName} onClick={handleCallContract} loading={isLoading}>
            {buttonLabel}
          </Button>
        </div>
      )}
    </div>
  )
}
