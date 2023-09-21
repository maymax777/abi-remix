export function useABIFile() {
  const readJsonFromFile = (file: File): Promise<JSON> => {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader()

        reader.onload = (e: ProgressEvent<FileReader>) => {
          try {
            const json: JSON = JSON.parse(e.target.result as string)
            resolve(json)
          } catch (error) {
            reject(error)
          }
        }

        reader.readAsText(file)
      } else {
        reject(new Error('No file provided'))
      }
    })
  }

  return { readJsonFromFile }
}
