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

const arr = {
  first: atomOneDark,
  error: purebasic,
  extra: androidstudio,
  default: agate
}

const CodeHighlighting = ({ data, variant }: IData) => {
  const style = arr[variant]

  return (
    <>
      <div className="bg-gray-500 grid place-items-center">
        <div className=" max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden ">
          <div className=" flex justify-between px-4 text-white text-xs items-center">
            <p className="text-sm">Example code</p>
            <CopyCodeButton data={data} />
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={style}
            customStyle={{
              padding: '25px'
            }}
            wrapLongLines={true}
          >
            {data}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  )
}
export default CodeHighlighting
