import Subtitle from '../typografy/Subtitle'
import CodeHighlighting from './CodeHighlighting'

interface ICodeTitle {
  id: number
  teg: 'fix' | 'error' | 'extra' | 'default' | ''
  title: string
  code: string // Предполагая, что code - это строка. Если это не так, замените тип на соответствующий.
  desc1: string
  desc2: string
  desc3: string
}

const CodeTitle = ({ data }: any) => {
  console.log('data', data[0].title)

  return (
    <div className=" flex flex-col">
      <Subtitle>{data[0].title}</Subtitle>
      <div className=" flex gap-4 mt-5">
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
        {/* <div className=" flex flex-col">
          <CodeHighlighting data={data[0].code} variant="error" />
          <div className="mt-2 ml-[20px] w-[350px]">
            <p>{data[0]?.desc1}</p>
            <p>{data[0]?.desc2}</p>
            <p>{data[0]?.desc3}</p>
          </div>
        </div> */}
        {/* <div className="flex flex-col">
          <CodeHighlighting data={data[1].code} variant="first" />
          <div className="mt-2 ml-[20px] w-[350px]">
            <p>{data[1]?.desc1}</p>
            <p>{data[1]?.desc2}</p>
            <p>{data[1]?.desc3}</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
export default CodeTitle
