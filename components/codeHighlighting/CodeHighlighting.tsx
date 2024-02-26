'use client'
import { codeUseState } from '@/lib/data/useState/data'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'

interface IData {
  data: string
}
const CodeHighlighting = ({ data }: IData) => {
  console.log('data', data)
  const [copy, setCopy] = useState(false)

  const handleCloneClick = (codeUseState: string) => {
    setCopy(true)

    navigator.clipboard.writeText(codeUseState)

    setTimeout(() => {
      setCopy(false)
    }, 3000)
  }

  return (
    <>
      <div className="bg-gray-500 grid place-items-center">
        <div className=" max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden ">
          <div className=" flex justify-between px-4 text-white text-xs items-center">
            <p className="text-sm">Example code</p>
            {copy ? (
              <button
                className=" py-1 inline-flex items-center gap-1"
                onClick={() => handleCloneClick(codeUseState)}
              >
                <span className="mt-1">
                  <Check size={15} />
                </span>
                Copied!
              </button>
            ) : (
              <button
                className=" py-1 inline-flex items-center gap-1"
                onClick={() => handleCloneClick(codeUseState)}
              >
                <span className="mt-1">
                  <Copy size={15} />
                </span>
                Copy Code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={atomOneDark}
            customStyle={{
              padding: '25px'
            }}
            wrapLongLines={true}
          >
            {codeUseState}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  )
}
export default CodeHighlighting
