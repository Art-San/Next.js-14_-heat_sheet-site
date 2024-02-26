'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
interface IData {
  data: string
}
const CopyCodeButton = ({ data }: IData) => {
  const [copy, setCopy] = useState(false)

  const handleCloneClick = (data: string) => {
    setCopy(true)

    navigator.clipboard.writeText(data)

    setTimeout(() => {
      setCopy(false)
    }, 3000)
  }
  return (
    <>
      {copy ? (
        <button
          className=" py-1 inline-flex items-center gap-1"
          onClick={() => handleCloneClick(data)}
        >
          <span className="mt-1">
            <Check size={15} />
          </span>
          Copied!
        </button>
      ) : (
        <button
          className=" py-1 inline-flex items-center gap-1"
          onClick={() => handleCloneClick(data)}
        >
          <span className="mt-1">
            <Copy size={15} />
          </span>
          Copy Code
        </button>
      )}
    </>
  )
}

export default CopyCodeButton
