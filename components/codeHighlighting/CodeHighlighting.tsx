import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atomOneDark,
  purebasic,
  androidstudio,
  agate,
  googlecode,
  atomOneDarkReasonable
} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CopyCodeButton from './CopyCodeButton'

type VariantType = 'fix' | 'error' | 'extra' | 'default' | ''

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
  fix: { tema: atomOneDark, size: '12px' },
  error: { tema: atomOneDarkReasonable, size: '12px' },
  default: { tema: agate, size: '14px' },
  extra: { tema: androidstudio, size: '16px' },
  '': { tema: googlecode, size: '10px' }
}

const CodeHighlighting = ({ data, variant }: IData) => {
  const tema = styles[variant].tema
  const size = styles[variant].size

  return (
    <>
      <div className="bg-gray-500 grid place-items-center">
        <div className=" max-w-2xl min-w-[25rem] bg-[#3a404d] rounded-md overflow-hidden ">
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
