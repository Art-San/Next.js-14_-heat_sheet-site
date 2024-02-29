import CodeHighlighting from '@/components/codeHighlighting/CodeHighlighting'
import CardWrapper from '@/components/common/Card'
import SmallTitle from '@/components/typografy/SmallTitle'
import { Separator } from '@/components/ui/separator'

const variables = {
  id: 1,
  slag: 'variables',
  title: 'Variables',
  desc1:
    'В JavaScript переменные используются для хранения значений данных, к которым можно получить доступ и которыми можно манипулировать на протяжении всей программы. Переменные могут содержать различные типы данных, такие как строки, числа, логические значения, массивы, объекты и т. д.',
  desc2:
    'Чтобы объявить переменную в JavaScript, вы используете ключевое слово var, let или const, за которым следует имя переменной.',
  code: `
  var myName = 'John'

  let age = 30
  
  const PI = 3.14`
}

const Variables = () => {
  return (
    <div className="flex flex-col w-[90%] justify-center items-center lg:flex-row">
      <div className="w-full lg:w-1/2">
        <CardWrapper>
          <SmallTitle>{variables.title}</SmallTitle>
          <h3 className=" text-base ">{variables.desc1}</h3>
          <h3 className=" text-base ">{variables.desc2}</h3>
          <Separator className="mt-4  bg-slate-300" />
        </CardWrapper>
      </div>
      <div>
        <CodeHighlighting data={variables.code} variant={'small'} />
      </div>
    </div>
  )
}
export default Variables
