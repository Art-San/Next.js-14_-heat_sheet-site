import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atomOneDark,
  androidstudio,
  agate,
  docco,
  darcula
} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CopyCodeButton from './CopyCodeButton'
import { cn } from '@/lib/utils'

type VariantType = 'fix' | 'error' | 'small' | 'medium' | 'large' | ''

interface IData {
  data: string
  variant: VariantType
}

// const arr = {
//   first: atomOneDark,
//   error: purebasic,
//   extra: androidstudio,
//   default: agate
// }
const styles = {
  fix: { tema: atomOneDark, font: '12px', size: 'max-w-2xl min-w-[25rem]' },

  error: { tema: docco, font: '12px', size: 'max-w-2xl min-w-[25rem]' },

  small: { tema: androidstudio, font: '15px', size: 'max-w-xs min-w-[18rem]' },

  medium: { tema: agate, font: '14px', size: 'max-w-2xl min-w-[25rem]' },

  large: { tema: androidstudio, font: '16px', size: 'max-w-2xl min-w-[25rem]' },

  '': { tema: darcula, font: '14px', size: 'max-w-2xl min-w-[25rem]' }
}

// small
// medium
// large

const CodeHighlighting = ({ data, variant }: IData) => {
  const tema = styles[variant].tema
  const font = styles[variant].font
  const size = styles[variant].size

  if (data === '') return null
  return (
    <>
      <div className="  max-w-xs min-w-[18rem]"></div>
      <div className="bg-gray-500 grid place-items-center">
        <div className={cn('bg-[#3a404d] rounded-md overflow-hidden', size)}>
          <div className=" flex justify-between px-4 text-white text-xs items-center">
            <p className=" text-xs">Example code</p>
            <p className="text-xs">{variant}</p>
            <CopyCodeButton data={data} />
          </div>
          <div className="m-[2px]">
            <SyntaxHighlighter
              language="javascript"
              style={tema}
              customStyle={{
                padding: '25px',
                fontSize: font
              }}
              wrapLongLines={true}
            >
              {data}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  )
}
export default CodeHighlighting
