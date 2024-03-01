export const dataVariables = [
  {
    id: 1,
    slug: 'let',
    name: 'Let',
    title: 'Let',
    like: false,
    desc1:
      '"Let" позволяет объявлять переменные с блочной областью видимости, ограничивая доступ к ним только внутри определенного блока кода.',
    desc2:
      'Предотвращает повторное объявление переменной в одной и той же области видимости, что помогает избежать ошибок.',
    desc3:
      'Обеспечивает более безопасное и предсказуемое управление переменными, особенно в сложных сценариях с вложенными блоками кода.',
    code1: `let x = 1
      console.log(x)
      
      x = 2
      console.log(x)`,
    code2: `if (true) {
        let blockScopedVariable =
        'Я доступна только внутри этого блока'
      
        console.log(blockScopedVariable)
        // Выведет: "Я доступна только внутри этого блока"
      }
      
      console.log(blockScopedVariable)
      // Ошибка: blockScopedVariable не определена`,
    code3: ''
  },
  {
    id: 2,
    slug: 'const',
    name: 'Const',
    title: 'Const',
    like: false,
    desc1: 'Ключевое слово для объявления констант.',
    desc2: 'Константы не могут быть переопределены после их инициализации.',
    desc3: 'Используется для хранения значений, которые не должны изменяться.',
    code1: `const PI = 3.14159;
      console.log(PI);`,
    code2: `const MAX_COUNT = 10;
      for (let i = 0; i < MAX_COUNT; i++) {
        console.log(i);
      }`,
    code3: ``
  },
  {
    id: 3,
    slug: 'var',
    name: 'Var',
    title: 'Var',
    like: false,
    desc1: 'Ключевое слово для объявления переменных.',
    desc2: 'Переменные объявленные с "var" доступны в любой части кода.',
    desc3: 'Используется для хранения значений, которые могут изменяться.',
    code1: `var x = 10;
      console.log(x);`,
    code2: `var name = "John";
      console.log(name);`,
    code3: ``
  }
  //   {
  //     id: 4,
  //     slug: 'const',
  //     title: 'Const',
  //     like: false,
  //     desc1: '',
  //     desc2: '',
  //     desc3: '',
  //     code1: ``,
  //     code2: ``,
  //     code3: ``
  //   },
  //   {
  //     id: 5,
  //     slug: 'var',
  //     title: 'Var',
  //     like: false,
  //     desc1: '',
  //     desc2: '',
  //     desc3: '',
  //     code1: ``,
  //     code2: ``,
  //     code3: ``
  //   }
]

export const variables = {
  id: 2,
  slug: 'variables',
  name: 'Variables',
  title: 'Variables',
  like: false,
  desc1:
    'В JavaScript переменные используются для хранения значений данных, к которым можно получить доступ и которыми можно манипулировать на протяжении всей программы. Переменные могут содержать различные типы данных, такие как строки, числа, логические значения, массивы, объекты и т. д.',
  desc2:
    'Чтобы объявить переменную в JavaScript, вы используете ключевое слово var, let или const, за которым следует имя переменной.',
  desc3: '',
  code1: `
    var myName = 'John'
  
    let age = 30
    
    const PI = 3.14`,
  code2: '',
  code3: '',
  data: dataVariables
}
