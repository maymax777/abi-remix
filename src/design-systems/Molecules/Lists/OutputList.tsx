import { Button } from 'design-systems/Atoms/Button/Button'
import { Spinner } from 'design-systems/Atoms/Spinner/Spinner'
import { v4 as uuid } from 'uuid'

interface OutputListProps {
  isLoading: boolean
  outputs: ABIChild[]
  data: unknown[] & {
    [x: string]: unknown
  }
}

interface OutputItemProps extends ABIChild {
  out: any
  index?: number
}

const OutputItem: React.FC<OutputItemProps> = ({ name = '', type = '', out, index = 0 }) => {
  const label = `${index}: ${type}: ${name}: `.replaceAll(' :', '')

  return (
    <div className="flex flex-row p-1">
      <p className="w-2/5 truncate p-1 text-left text-xxs">{label}</p>
      <p className="w-3/5 break-all rounded-md p-1 text-center text-xxs">{out?.toString()}</p>
    </div>
  )
}

export const OutputList: React.FC<OutputListProps> = ({ outputs, data, isLoading }) => {
  if (data)
    return (
      <div className="rounded-b-lg bg-green-800">
        <p className="p-2 text-sm uppercase underline">OUTPUT</p>
        {isLoading && <Spinner />}
        {outputs.length > 1 ? (
          outputs.map((output, index) => (
            <OutputItem key={uuid()} {...output} out={data && data[index]} index={index} />
          ))
        ) : (
          <OutputItem key={uuid()} {...outputs[0]} out={data} />
        )}
      </div>
    )

  return <></>
}
