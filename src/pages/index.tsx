import { useAccount } from 'wagmi'
import ConnectWallet from 'design-systems/Atoms/ConnectButton/ConnectWallet'
import { FileUploader } from 'design-systems/Molecules/Uploaders/FileUploader'
import { SidePanel } from 'design-systems/Organisms/SidePanel/SidePanel'
import { useABIFile } from 'hooks/use-abi-file'
import { useABI } from 'contexts/abi-provider'

export default function Home() {
  const { readJsonFromFile } = useABIFile()
  const { setABI } = useABI()

  const handleFileSelect = async (file: File) => {
    try {
      if (file) {
        const json = await readJsonFromFile(file)
        setABI(json)
      } else {
        setABI(null)
      }
    } catch (err) {}
  }

  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center gap-2 bg-neutral-100">
      <div className="flex h-full w-full items-center justify-center">
        <div className="fixed left-10 top-10">
          <ConnectWallet />
        </div>
        <div className="flex flex-col items-center justify-center">
          <FileUploader onFileSelect={handleFileSelect} />
        </div>
      </div>
      <SidePanel />
    </div>
  )
}
