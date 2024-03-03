export const dataTypes = [
  {
    id: 1,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'undefined',
    tags: ['data-types'],
    name: 'Undefined',
    title: 'Undefined',
    like: false,
    desc1:
      'Тип данных undefined в JavaScript используется для представления неопределенного значения.',
    desc2: 'Undefined является единственным значением своего типа.',
    desc3:
      'Undefined присваивается переменным, которые были объявлены, но не инициализированы.',
    code1: `log = console.log
    let notDefined;
    log(notDefined);`,
    code2: ``,
    code3: ``
  },
  {
    id: 2,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'boolean',
    tags: ['data-types'],
    name: 'Boolean',
    title: 'Boolean',
    like: false,
    desc1:
      'Тип данных boolean в JavaScript используется для представления логических значений.',
    desc2: 'Булевы значения могут быть только true или false.',
    desc3: 'Булевы значения часто используются в условных операторах и циклах.',
    code1: `log = console.log
    let isTrue = true;
    let isFalse = false;
    log(isTrue);
    log(isFalse);`,
    code2: ``,
    code3: ``
  },
  {
    id: 3,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'number',
    tags: ['data-types'],
    name: 'Number',
    title: 'Number',
    like: false,
    desc1:
      'Тип данных number в JavaScript используется для представления числовых значений, включая целые числа и числа с плавающей точкой.',
    desc2:
      'Методы для работы с числами: Встроенные методы, такие как Math.round(), Math.floor(), Math.ceil(), и другие, предоставляют широкие возможности для работы с числами, включая округление, преобразование в целые числа и выполнение различных математических операций.',
    desc3: '',
    code1: `log = console.log
    let a = 4, b = 2
    const sum = a + b
    log(sum)
    
    let y = 3.14
    let z = 4.46
    const multiply = y * z
    log(multiply)
    
    log(5 * 'string') // NaN
    
    log(199 / 0) // Infinity
    
    log(Math.round(43.392874)) // 43
    
    log(Math.floor(Math.random() * 100)) 
    // generates random number
    `,
    code2: ``,
    code3: ``
  },
  {
    id: 4,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'string',
    tags: ['data-types'],
    name: 'String',
    title: 'String',
    like: false,
    desc1:
      'Тип данных string в JavaScript используется для представления текстовых значений.',
    desc2:
      'Строки могут быть одиночными или двойными кавычками, а также обрамлены обратными кавычками для многострочных строк.',
    desc3:
      'Строки являются неизменяемыми, что означает, что после их создания они не могут быть изменены.',
    code1: `log = console.log
    let greeting = 'Hello, world!'
    let message = "It's a beautiful day."
    let multiline = \`This is a 
    multiline string\`
    log(greeting)
    log(message)
    log(multiline)`,
    code2: ``,
    code3: ``
  },
  {
    id: 5,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'bigInt',
    tags: ['data-types'],
    name: 'BigInt',
    title: 'BigInt',
    like: false,
    desc1:
      'В JavaScript, BigInt - числовой тип данных, который может представлять данные в формате длинной арифметики.',
    desc2:
      'BigInt это встроенный объект, который предоставляет способ представлять целые числа больше 253 - 1, наибольшего числа, которое JavaScript может надёжно представить с Number примитивом',
    desc3: '',
    code1: `const theBiggestInt = 9007199254740991n;

    const alsoHuge = BigInt(9007199254740991);
    // ↪ 9007199254740991n
    
    const hugeString = BigInt("9007199254740991");
    // ↪ 9007199254740991n
    
    const hugeHex = BigInt("0x1fffffffffffff");
    // ↪ 9007199254740991n
    
    const hugeBin = BigInt(
      "0b11111111111111111111111111111111111111111111111111111",
    );
    // ↪ 9007199254740991n`,
    code2: ``,
    code3: ``
  },
  {
    id: 6,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'symbol',
    tags: ['data-types'],
    name: 'Symbol',
    title: 'Symbol',
    like: false,
    desc1:
      'Тип данных symbol в JavaScript используется для создания уникальных идентификаторов.',
    desc2: 'Символы не могут быть преобразованы в строки или числа.',
    desc3: 'Символы часто используются в качестве ключей для объектов.',
    code1: `log = console.log
    let symbol1 = Symbol('symbol1');
    let symbol2 = Symbol('symbol2');
    log(symbol1);
    log(symbol2);`,
    code2: ``,
    code3: ``
  },
  {
    id: 7,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'null',
    tags: ['data-types'],
    name: 'Null',
    title: 'Null',
    like: false,
    desc1:
      'Тип данных null в JavaScript используется для представления отсутствия значения.',
    desc2: 'Null является единственным значением своего типа.',
    desc3:
      'Null часто используется для инициализации переменных, которые еще не имеют значения.',
    code1: `log = console.log
    let nothing = null;
    log(nothing);`,
    code2: ``,
    code3: ``
  },
  {
    id: 8,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'object',
    tags: ['data-types'],
    name: 'Object',
    title: 'Object',
    like: false,
    desc1:
      'Тип данных object в JavaScript используется для представления сложных структур данных.',
    desc2: 'Объекты могут содержать свойства и методы.',
    desc3:
      'Объекты являются основным типом данных для работы с данными в JavaScript.',
    code1: `log = console.log
    let person = {
      name: 'John',
      age: 30,
      greet: function() {
        console.log('Hello, ' + this.name);
      }
    };
    log(person);
    person.greet();`,
    code2: ``,
    code3: ``
  },
  {
    id: 9,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'array',
    tags: ['data-types'],
    name: 'Array',
    title: 'Array',
    like: false,
    desc1:
      'Тип данных array в JavaScript используется для представления упорядоченных коллекций элементов.',
    desc2: 'Массивы могут содержать элементы различных типов данных.',
    desc3:
      'Массивы предоставляют методы для работы с элементами, такие как добавление, удаление и поиск элементов.',
    code1: `log = console.log
    let fruits = ['apple', 'banana', 'orange'];
    log(fruits);
    fruits.push('grape');
    log(fruits);`,
    code2: ``,
    code3: ``
  },
  {
    id: 10,
    subject: 'javascript',
    chapter: 'data-types',
    slug: 'function',
    tags: ['data-types'],
    name: 'Function',
    title: 'Function',
    like: false,
    desc1:
      'Тип данных function в JavaScript используется для представления функций, которые могут быть вызваны для выполнения кода.',
    desc2: 'Функции могут принимать аргументы и возвращать значения.',
    desc3:
      'Функции являются объектами первого класса в JavaScript и могут быть присвоены переменным, передаваться в качестве аргументов и возвращаться из других функций.',
    code1: `log = console.log
    function add(a, b) {
      return a + b;
    }
    log(add(1, 2)); // 3`,
    code2: ``,
    code3: ``
  }
]

export const types = {
  id: 3,
  subject: 'javascript',
  slug: 'data-types',
  tags: [
    'number',
    'string',
    'boolean',
    'symbol',
    'null',
    'undefined',
    'object',
    'array',
    'function'
  ],
  name: 'Data Types',
  title: 'Data Types',
  like: false,
  desc1:
    'В JavaScript cтандарт ECMAScript определяет 8 типов: 6 типов данных являющихся примитивами: Number, BigInt, String, Boolean, Undefined, Symbol',
  desc2:
    'Null: Специальный примитив, используемый не только для данных но и в качестве указателя на финальную точку в Цепочке Прототипов',
  desc3:
    'Object: Простая структура, используемая не только для хранения данных, но и для создания других структур, где любая структура создаётся с использованием ключевого слова new: new Object, new Array, new Map (en-US), new Set, new WeakMap, new WeakSet, new Date и множество других структур;',
  code1: `// Numbers
  42, 3.14, -1.5
  
  // String
  "hello", 'world', "It's raining"
  
  // Boolean
  true, false
  
  // Null
  null
  
  // Undefined
  undefined
  
  // Object
  {
      id: 1,
      name: 'John'
  }
  
  // Array
  ['apple', 'banana', 'orange']
  
  // Function
  function myFunction(a, b) {
      return a + b
  }`,
  code2: '',
  code3: '',
  data: dataTypes
}

// export const dataVariables = [
//   {
//     id: 9,
//     subject: '',
//     chapter: '',
//     slug: '',
//     tags: [''],
//     name: '',
//     title: '',
//     like: false,
//     desc1: '',
//     desc2: '',
//     desc3: '',
//     code1: ``,
//     code2: ``,
//     code3: ``
//   },
// ]
