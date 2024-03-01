import Subtitle from '../typografy/Subtitle'
import CodeHighlighting from './CodeHighlighting'

interface ICodeTitle {
  id: number
  teg: 'fix' | 'error' | 'small' | 'medium' | 'large' | ''
  title: string
  code: string
  desc1: string
  desc2: string
  desc3: string
}

const CodeTitle = ({ data }: any) => {
  return (
    <div className=" flex flex-col">
      <Subtitle>{data[0].title}</Subtitle>
      <div className=" flex gap-4 mt-5 flex-col lg:flex-row">
        {data.map((el: ICodeTitle, index: number) => (
          <div key={index} className=" flex flex-col">
            <CodeHighlighting data={el?.code} variant={el?.teg} />
            <div className="mt-2 ml-[20px] w-[350px]">
              <p>{el?.desc1}</p>
              <p>{el?.desc2}</p>
              <p>{el?.desc3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default CodeTitle
