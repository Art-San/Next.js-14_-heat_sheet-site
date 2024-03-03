// push unshift // add
// shift pop // del
// forEach map filter find findIndex some every// iterate
// reduce sort //
// splice slice indexOf includes split join reverse//
// concat

export const dataArrayMethods = [
  {
    id: 1,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'push',
    tags: ['array-methods'],
    name: 'Push',
    title: 'Push',
    like: false,
    desc1:
      'Метод push используется для добавления одного или нескольких элементов в массив.',
    desc2: 'Он возвращает длину массива после добавления элементов.',
    desc3: '',
    code1: `let arr = [28, 4, 99]

    arr.push(25, 3)
  
    console.log(arr) 
    //[ 28, 4, 99, 25, 3 ]`,
    code2: ` // Пример с массивом объектов
    let students = [
      { id: 1, name: 'jack', score: 76 },
      { id: 2, name: 'maria', score: 85 }
    ]
  
    students.push({ id: 3, name: 'sam', score: 98 })
  
    console.log(students)
  
    // [
    //   { id: 1, name: 'jack', score: 76 },
    //   { id: 2, name: 'maria', score: 85 },
    //   { id: 3, name: 'sam', score: 98 }
    // ]`,
    code3: ``
  }
]

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
    code1: `let log = console.log;
    let notDefined;
    log(notDefined);`,
    code2: ``,
    code3: ``
  },
  {
    id: 2,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'push',
    tags: ['array-methods'],
    name: 'Push',
    title: 'Push',
    like: false,
    desc1:
      'Метод push используется для добавления одного или нескольких элементов в конец массива.',
    desc2: 'Он возвращает новую длину массива после добавления элементов.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
    arr.push(25, 3);
    console.log(arr); // [28, 4, 99, 25, 3]`,
    code2: ``,
    code3: ``
  },
  {
    id: 3,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'unshift',
    tags: ['array-methods'],
    name: 'Unshift',
    title: 'Unshift',
    like: false,
    desc1:
      'Метод unshift используется для добавления одного или нескольких элементов в начало массива.',
    desc2: 'Он возвращает новую длину массива после добавления элементов.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
    arr.unshift(25, 3);
    console.log(arr); // [25, 3, 28, 4, 99]`,
    code2: ``,
    code3: ``
  },
  {
    id: 4,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'shift',
    tags: ['array-methods'],
    name: 'Shift',
    title: 'Shift',
    like: false,
    desc1:
      'Метод shift используется для удаления первого элемента массива и возвращения его.',
    desc2: 'Он изменяет длину массива.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      let firstElement = arr.shift();
      console.log(firstElement); // 28
      console.log(arr); // [4, 99]`,
    code2: ``,
    code3: ``
  },
  {
    id: 5,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'pop',
    tags: ['array-methods'],
    name: 'Pop',
    title: 'Pop',
    like: false,
    desc1:
      'Метод pop используется для удаления последнего элемента массива и возвращения его.',
    desc2: 'Он изменяет длину массива.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      let lastElement = arr.pop();
      console.log(lastElement); // 99
      console.log(arr); // [28, 4]`,
    code2: ``,
    code3: ``
  },
  {
    id: 6,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'forEach',
    tags: ['array-methods'],
    name: 'ForEach',
    title: 'ForEach',
    like: false,
    desc1:
      'Метод forEach используется для выполнения функции для каждого элемента массива.',
    desc2: 'Он не изменяет массив.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      arr.forEach(element => console.log(element)); // Выводит каждый элемент массива`,
    code2: ``,
    code3: ``
  },
  {
    id: 7,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'map',
    tags: ['array-methods'],
    name: 'Map',
    title: 'Map',
    like: false,
    desc1:
      'Метод map создает новый массив с результатами вызова функции для каждого элемента исходного массива.',
    desc2: 'Он не изменяет исходный массив.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      let newArr = arr.map(element => element * 2);
      console.log(newArr); // [56, 8, 198]`,
    code2: ``,
    code3: ``
  },
  {
    id: 8,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'filter',
    tags: ['array-methods'],
    name: 'Filter',
    title: 'Filter',
    like: false,
    desc1:
      'Метод filter создает новый массив со всеми элементами, прошедшими тест, предоставленный функцией.',
    desc2: 'Он не изменяет исходный массив.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      let filteredArr = arr.filter(element => element > 50);
      console.log(filteredArr); // [28, 99]`,
    code2: ``,
    code3: ``
  },
  {
    id: 9,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'find',
    tags: ['array-methods'],
    name: 'Find',
    title: 'Find',
    like: false,
    desc1:
      'Метод find возвращает первый элемент в массиве, который проходит тест, предоставленный функцией.',
    desc2: 'Он возвращает undefined, если ни один элемент не проходит тест.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      let foundElement = arr.find(element => element > 50);
      console.log(foundElement); // 28`,
    code2: ``,
    code3: ``
  },
  {
    id: 10,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'findIndex',
    tags: ['array-methods'],
    name: 'FindIndex',
    title: 'FindIndex',
    like: false,
    desc1:
      'Метод findIndex возвращает индекс первого элемента в массиве, который проходит тест, предоставленный функцией.',
    desc2: 'Он возвращает -1, если ни один элемент не проходит тест.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      let foundIndex = arr.findIndex(element => element > 50);
      console.log(foundIndex); // 0`,
    code2: ``,
    code3: ``
  },
  {
    id: 11,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'some',
    tags: ['array-methods'],
    name: 'Some',
    title: 'Some',
    like: false,
    desc1:
      'Метод some проверяет, выполняется ли предоставленная функция хотя бы для одного элемента массива.',
    desc2: 'Он возвращает true, если хотя бы один элемент проходит тест.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      let hasElementGreaterThan50 = arr.some(element => element > 50);
      console.log(hasElementGreaterThan50); // true`,
    code2: ``,
    code3: ``
  },
  {
    id: 12,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'every',
    tags: ['array-methods'],
    name: 'Every',
    title: 'Every',
    like: false,
    desc1:
      'Метод every проверяет, выполняется ли предоставленная функция для всех элементов массива.',
    desc2: 'Он возвращает true, если все элементы проходят тест.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      let allElementsGreaterThan50 = arr.every(element => element > 50);
      console.log(allElementsGreaterThan50); // false`,
    code2: ``,
    code3: ``
  },
  {
    id: 13,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'reduce',
    tags: ['array-methods'],
    name: 'Reduce',
    title: 'Reduce',
    like: false,
    desc1:
      'Метод reduce применяет функцию к аккумулятору и каждому элементу массива (слева направо), чтобы свести его к одному значению.',
    desc2:
      'Он может использоваться для преобразования массива в другой тип данных.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      let sum = arr.reduce((acc, element) => acc + element, 0);
      console.log(sum); // 121`,
    code2: ``,
    code3: ``
  },
  {
    id: 14,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'sort',
    tags: ['array-methods'],
    name: 'Sort',
    title: 'Sort',
    like: false,
    desc1:
      'Метод sort сортирует элементы массива на месте и возвращает массив.',
    desc2:
      'Он может принимать функцию сравнения для определения порядка сортировки.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
      arr.sort((a, b) => a - b);
      console.log(arr); // [4, 28, 99]`,
    code2: ``,
    code3: ``
  },
  {
    id: 15,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'splice',
    tags: ['array-methods'],
    name: 'Splice',
    title: 'Splice',
    like: false,
    desc1:
      'Метод splice изменяет содержимое массива, удаляя или заменяя существующие элементы и/или добавляя новые элементы.',
    desc2: 'Он возвращает массив удаленных элементов.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
       let removedElements = arr.splice(1, 2, 50, 51);
       console.log(removedElements); // [4, 99]
       console.log(arr); // [28, 50, 51]`,
    code2: ``,
    code3: ``
  },
  {
    id: 16,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'slice',
    tags: ['array-methods'],
    name: 'Slice',
    title: 'Slice',
    like: false,
    desc1:
      'Метод slice возвращает новый массив, содержащий копию части исходного массива.',
    desc2: 'Он не изменяет исходный массив.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
       let slicedArr = arr.slice(1, 3);
       console.log(slicedArr); // [4, 99]`,
    code2: ``,
    code3: ``
  },
  {
    id: 17,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'indexOf',
    tags: ['array-methods'],
    name: 'IndexOf',
    title: 'IndexOf',
    like: false,
    desc1:
      'Метод indexOf возвращает индекс первого вхождения указанного элемента в массив или -1, если элемент не найден.',
    desc2: 'Он начинает поиск с начала массива.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
       let index = arr.indexOf(99);
       console.log(index); // 2`,
    code2: ``,
    code3: ``
  },
  {
    id: 18,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'includes',
    tags: ['array-methods'],
    name: 'Includes',
    title: 'Includes',
    like: false,
    desc1: 'Метод includes проверяет, содержит ли массив указанный элемент.',
    desc2:
      'Он возвращает true, если элемент найден, и false в противном случае.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
       let hasElement = arr.includes(99);
       console.log(hasElement); // true`,
    code2: ``,
    code3: ``
  },
  {
    id: 19,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'split',
    tags: ['array-methods'],
    name: 'Split',
    title: 'Split',
    like: false,
    desc1:
      'Метод split разбивает строку на массив подстрок по указанному разделителю.',
    desc2:
      'Он не применим к массивам, но может быть использован для преобразования строки в массив.',
    desc3: '',
    code1: `let str = "28, 4, 99";
       let arr = str.split(", ");
       console.log(arr); // ["28", "4", "99"]`,
    code2: ``,
    code3: ``
  },
  {
    id: 20,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'join',
    tags: ['array-methods'],
    name: 'Join',
    title: 'Join',
    like: false,
    desc1: 'Метод join объединяет все элементы массива в строку.',
    desc2: 'Он может принимать разделитель в качестве аргумента.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
       let joinedStr = arr.join(", ");
       console.log(joinedStr); // "28, 4, 99"`,
    code2: ``,
    code3: ``
  },
  {
    id: 21,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'reverse',
    tags: ['array-methods'],
    name: 'Reverse',
    title: 'Reverse',
    like: false,
    desc1: 'Метод reverse переворачивает порядок элементов массива на месте.',
    desc2: 'Он возвращает измененный массив.',
    desc3: '',
    code1: `let arr = [28, 4, 99];
       arr.reverse();
       console.log(arr); // [99, 4, 28]`,
    code2: ``,
    code3: ``
  },
  {
    id: 22,
    subject: 'javascript',
    chapter: 'array-methods',
    slug: 'concat',
    tags: ['array-methods'],
    name: 'Concat',
    title: 'Concat',
    like: false,
    desc1: 'Метод concat объединяет два или более массива в новый массив.',
    desc2: 'Он не изменяет исходные массивы.',
    desc3: '',
    code1: `let arr1 = [28, 4, 99];
       let arr2 = [1, 2, 3];
       let newArr = arr1.concat(arr2);
       console.log(newArr); // [28, 4, 99, 1, 2, 3]`,
    code2: ``,
    code3: ``
  }
]
// export const dataArrayMethods = [
//   {
//     id: 1,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'push',
//     tags: ['array-methods'],
//     name: 'Push',
//     title: 'Push',
//     like: false,
//     desc1:
//       'Метод push используется для добавления одного или нескольких элементов в массив.',
//     desc2: 'Он возвращает длину массива после добавления элементов.',
//     desc3: '',
//     code1: `let arr = [28, 4, 99]

//     arr.push(25, 3)

//     console.log(arr)
//     //[ 28, 4, 99, 25, 3 ]`,
//     code2: ` // Пример с массивом объектов
//     let students = [
//       { id: 1, name: 'jack', score: 76 },
//       { id: 2, name: 'maria', score: 85 }
//     ]

//     students.push({ id: 3, name: 'sam', score: 98 })

//     console.log(students)

//     // [
//     //   { id: 1, name: 'jack', score: 76 },
//     //   { id: 2, name: 'maria', score: 85 },
//     //   { id: 3, name: 'sam', score: 98 }
//     // ]`,
//     code3: ``
//   },
//   {
//     id: 2,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'unshift',
//     tags: ['array-methods'],
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
//   {
//     id: 3,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'shift',
//     tags: ['array-methods'],
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
//   {
//     id: 4,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'pop',
//     tags: ['array-methods'],
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
//   {
//     id: 5,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'forEach',
//     tags: ['array-methods'],
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
//   {
//     id: 6,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'map',
//     tags: ['array-methods'],
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
//   {
//     id: 7,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'filter',
//     tags: ['array-methods'],
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
//   {
//     id: 8,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'find',
//     tags: ['array-methods'],
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
//   {
//     id: 9,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'findIndex',
//     tags: ['array-methods'],
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
//   {
//     id: 10,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'some',
//     tags: ['array-methods'],
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
//   {
//     id: 11,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'every',
//     tags: ['array-methods'],
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
//   {
//     id: 12,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'reduce',
//     tags: ['array-methods'],
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
//   {
//     id: 13,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'sort',
//     tags: ['array-methods'],
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
//   {
//     id: 14,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'splice',
//     tags: ['array-methods'],
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
//   {
//     id: 15,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'slice',
//     tags: ['array-methods'],
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
//   {
//     id: 16,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'indexOf',
//     tags: ['array-methods'],
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
//   {
//     id: 17,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'includes',
//     tags: ['array-methods'],
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
//   {
//     id: 18,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'split',
//     tags: ['array-methods'],
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
//   {
//     id: 19,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'join',
//     tags: ['array-methods'],
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
//   {
//     id: 20,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'reverse',
//     tags: ['array-methods'],
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
//   {
//     id: 21,
//     subject: 'javascript',
//     chapter: 'array-methods',
//     slug: 'concat',
//     tags: ['array-methods'],
//     name: '',
//     title: '',
//     like: false,
//     desc1: '',
//     desc2: '',
//     desc3: '',
//     code1: ``,
//     code2: ``,
//     code3: ``
//   }
// ]

export const arrayMethods = {
  id: 4,
  subject: 'javascript',
  slug: 'array-methods',
  tags: [
    'push',
    'unshift',
    'shift',
    'pop',
    'forEach',
    'map',
    'filter',
    'find',
    'findIndex',
    'some',
    'every',
    'reduce',
    'sort',
    'splice',
    'slice',
    'indexOf',
    'includes',
    'split',
    'join',
    'reverse',
    'concat'
  ],
  name: 'Array Methods',
  title: 'Array Methods',
  like: false,
  desc1:
    'Методы Javascript Array используются для выполнения определенных операций с массивами, таких как сортировка, поиск, фильтрация, внесение изменений в элементы массивов.',
  desc2: 'Наиболее часто используемые методы массива: Map, Filter, Sort, Slice',
  desc3: '',
  code1: ``,
  code2: ``,
  code3: ``
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
