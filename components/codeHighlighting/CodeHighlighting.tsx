import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atomOneDark,
  purebasic,
  androidstudio,
  agate
} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CopyCodeButton from './CopyCodeButton'

type VariantType = 'first' | 'error' | 'extra' | 'default'

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
const style = {
  first: { tema: atomOneDark, size: '12px' },
  error: { tema: purebasic, size: '12px' },
  default: { tema: agate, size: '14px' },
  extra: { tema: androidstudio, size: '16px' }
}

console.log('arr2, ', style.first.size)

const CodeHighlighting = ({ data, variant }: IData) => {
  const tema = style[variant].tema
  const size = style[variant].size
  // const style = arr[variant]

  return (
    <>
      <div className="bg-gray-500 grid place-items-center">
        <div className=" max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden ">
          <div className=" flex justify-between px-4 text-white text-xs items-center">
            <p className=" text-xs">Example code</p>
            <p className="text-xs">пример</p>
            <CopyCodeButton data={data} />
          </div>
          <div className="m-[2px]">
            <SyntaxHighlighter
              language="javascript"
              style={tema}
              customStyle={{
                padding: '25px',
                fontSize: size
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
