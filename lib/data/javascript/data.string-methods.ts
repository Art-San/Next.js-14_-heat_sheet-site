export const dataStringMethods = [
  {
    id: 1,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'split',
    tags: ['string-methods'],
    name: 'Split',
    title: 'Split',
    like: true,
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
    id: 2,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'charAt',
    tags: ['string-methods'],
    name: 'CharAt',
    title: 'CharAt',
    like: true,
    desc1: 'Метод charAt возвращает символ в указанной позиции строки.',
    desc2: 'Если позиция выходит за пределы строки, возвращает пустую строку.',
    desc3: '',
    code1: `let str = "Hello, world!";
     let char = str.charAt(7);
     console.log(char); // "w"`,
    code2: ``,
    code3: ``
  },
  {
    id: 3,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'charCodeAt',
    tags: ['string-methods'],
    name: 'CharCodeAt',
    title: 'CharCodeAt',
    like: true,
    desc1:
      'Метод charCodeAt возвращает числовое значение Unicode символа в указанной позиции строки.',
    desc2: 'Если позиция выходит за пределы строки, возвращает NaN.',
    desc3: '',
    code1: `let str = "Hello, world!";
     let charCode = str.charCodeAt(7);
     console.log(charCode); // 119`,
    code2: ``,
    code3: ``
  },
  {
    id: 4,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'toUpperCase',
    tags: ['string-methods'],
    name: 'ToUpperCase',
    title: 'ToUpperCase',
    like: true,
    desc1:
      'Метод toUpperCase преобразует все символы строки в верхний регистр.',
    desc2: 'Он возвращает новую строку, не изменяя исходную.',
    desc3: '',
    code1: `let str = "Hello, world!";
     let upperStr = str.toUpperCase();
     console.log(upperStr); // "HELLO, WORLD!"`,
    code2: ``,
    code3: ``
  },
  {
    id: 5,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'toLowerCase',
    tags: ['string-methods'],
    name: 'ToLowerCase',
    title: 'ToLowerCase',
    like: true,
    desc1: 'Метод toLowerCase преобразует все символы строки в нижний регистр.',
    desc2: 'Он возвращает новую строку, не изменяя исходную.',
    desc3: '',
    code1: `let str = "Hello, world!";
     let lowerStr = str.toLowerCase();
     console.log(lowerStr); // "hello, world!"`,
    code2: ``,
    code3: ``
  },
  {
    id: 6,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'trim',
    tags: ['string-methods'],
    name: 'Trim',
    title: 'Trim',
    like: true,
    desc1: 'Метод trim удаляет пробелы с начала и конца строки.',
    desc2: 'Он возвращает новую строку, не изменяя исходную.',
    desc3: '',
    code1: `let str = "   Hello, world!   ";
     let trimmedStr = str.trim();
     console.log(trimmedStr); // "Hello, world!"`,
    code2: ``,
    code3: ``
  },
  {
    id: 7,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'indexOf',
    tags: ['string-methods'],
    name: 'IndexOf',
    title: 'IndexOf',
    like: true,
    desc1:
      'Метод indexOf возвращает индекс первого вхождения указанного символа или подстроки в строке или -1, если символ/подстрока не найден.',
    desc2: 'Он начинает поиск с начала строки.',
    desc3: '',
    code1: `let str = "Hello, world!";
    let index = str.indexOf("world");
    console.log(index); // 7`,
    code2: ``,
    code3: ``
  },
  {
    id: 8,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'lastIndexOf',
    tags: ['string-methods'],
    name: 'LastIndexOf',
    title: 'LastIndexOf',
    like: true,
    desc1:
      'Метод lastIndexOf возвращает индекс последнего вхождения указанного символа или подстроки в строке или -1, если символ/подстрока не найден.',
    desc2: 'Он начинает поиск с конца строки.',
    desc3: '',
    code1: `let str = "Hello, world! world!";
    let lastIndex = str.lastIndexOf("world");
    console.log(lastIndex); // 13`,
    code2: ``,
    code3: ``
  },
  {
    id: 9,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'includes',
    tags: ['string-methods'],
    name: 'Includes',
    title: 'Includes',
    like: true,
    desc1:
      'Метод includes проверяет, содержит ли строка указанный символ или подстроку.',
    desc2:
      'Он возвращает true, если символ/подстрока найден, и false в противном случае.',
    desc3: '',
    code1: `let str = "Hello, world!";
    let hasSubstring = str.includes("world");
    console.log(hasSubstring); // true`,
    code2: ``,
    code3: ``
  },
  {
    id: 10,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'slice',
    tags: ['string-methods'],
    name: 'Slice',
    title: 'Slice',
    like: true,
    desc1:
      'Метод slice возвращает подстроку из строки, начиная с указанного индекса и до конца строки или до указанного конечного индекса.',
    desc2: 'Он не изменяет исходную строку.',
    desc3: '',
    code1: `let str = "Hello, world!";
    let slicedStr = str.slice(7, 12);
    console.log(slicedStr); // "world"`,
    code2: ``,
    code3: ``
  },
  {
    id: 11,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'substring',
    tags: ['string-methods'],
    name: 'Substring',
    title: 'Substring',
    like: true,
    desc1:
      'Метод substring возвращает подстроку из строки между двумя указанными индексами.',
    desc2: 'Он не изменяет исходную строку.',
    desc3: '',
    code1: `let str = "Hello, world!";
    let subStr = str.substring(7, 12);
    console.log(subStr); // "world"`,
    code2: ``,
    code3: ``
  },
  {
    id: 12,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'replace',
    tags: ['string-methods'],
    name: 'Replace',
    title: 'Replace',
    like: true,
    desc1:
      'Метод replace заменяет часть строки, соответствующую указанному шаблону, на новую подстроку.',
    desc2: 'Он возвращает новую строку с заменой.',
    desc3: '',
    code1: `let str = "Hello, world!";
    let newStr = str.replace("world", "JavaScript");
    console.log(newStr); // "Hello, JavaScript!"`,
    code2: ``,
    code3: ``
  },
  {
    id: 13,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'replaceAll',
    tags: ['string-methods'],
    name: 'ReplaceAll',
    title: 'ReplaceAll',
    like: true,
    desc1:
      'Метод replaceAll заменяет все вхождения подстроки в строке на новую подстроку.',
    desc2: 'Он возвращает новую строку с заменами.',
    desc3: '',
    code1: `let str = "Hello, world! world!";
    let newStr = str.replaceAll("world", "JavaScript");
    console.log(newStr); // "Hello, JavaScript! JavaScript!"`,
    code2: ``,
    code3: ``
  },
  {
    id: 14,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'repeat',
    tags: ['string-methods'],
    name: 'Repeat',
    title: 'Repeat',
    like: true,
    desc1:
      'Метод repeat создает новую строку, повторяющую исходную строку указанное количество раз.',
    desc2: 'Он возвращает новую строку, не изменяя исходную.',
    desc3: '',
    code1: `let str = "Hello";
     let repeatedStr = str.repeat(3);
     console.log(repeatedStr); // "HelloHelloHello"`,
    code2: ``,
    code3: ``
  },
  {
    id: 15,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'parseInt',
    tags: ['string-methods'],
    name: 'ParseInt',
    title: 'ParseInt',
    like: true,
    desc1: 'Метод parseInt преобразует строку в целое число.',
    desc2: 'Если строка не может быть преобразована, возвращает NaN.',
    desc3: '',
    code1: `let str = "42";
     let num = parseInt(str);
     console.log(num); // 42`,
    code2: ``,
    code3: ``
  },
  {
    id: 16,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'isNaN',
    tags: ['string-methods'],
    name: 'IsNaN',
    title: 'IsNaN',
    like: true,
    desc1: 'Метод isNaN проверяет, является ли значение NaN (Not a Number).',
    desc2:
      'Возвращает true, если значение является NaN, и false в противном случае.',
    desc3: '',
    code1: `let str = "Hello";
     let isNotNum = isNaN(str);
     console.log(isNotNum); // true`,
    code2: ``,
    code3: ``
  },
  {
    id: 17,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'startsWith',
    tags: ['string-methods'],
    name: 'StartsWith',
    title: 'StartsWith',
    like: true,
    desc1:
      'Метод startsWith проверяет, начинается ли строка с указанной подстроки.',
    desc2:
      'Возвращает true, если строка начинается с указанной подстроки, и false в противном случае.',
    desc3: '',
    code1: `let str = "Hello, world!";
     let startsWith = str.startsWith("Hello");
     console.log(startsWith); // true`,
    code2: ``,
    code3: ``
  },
  {
    id: 18,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'endsWith',
    tags: ['string-methods'],
    name: 'EndsWith',
    title: 'EndsWith',
    like: true,
    desc1:
      'Метод endsWith проверяет, заканчивается ли строка указанной подстрокой.',
    desc2:
      'Возвращает true, если строка заканчивается указанной подстрокой, и false в противном случае.',
    desc3: '',
    code1: `let str = "Hello, world!";
     let endsWith = str.endsWith("world!");
     console.log(endsWith); // true`,
    code2: ``,
    code3: ``
  },
  {
    id: 19,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'match',
    tags: ['string-methods'],
    name: 'Match',
    title: 'Match',
    like: true,
    desc1: 'Метод match ищет совпадения с регулярным выражением в строке.',
    desc2: 'Возвращает массив совпадений или null, если совпадений не найдено.',
    desc3: '',
    code1: `let str = "Hello, world!";
     let regex = /world/;
     let match = str.match(regex);
     console.log(match); // ["world"]`,
    code2: ``,
    code3: ``
  },
  {
    id: 20,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'concat',
    tags: ['string-methods'],
    name: 'Concat',
    title: 'Concat',
    like: true,
    desc1: 'Метод concat объединяет две или более строк в новую строку.',
    desc2: 'Он не изменяет исходные строки.',
    desc3: '',
    code1: `let str1 = "Hello";
     let str2 = " world!";
     let concatenatedStr = str1.concat(str2);
     console.log(concatenatedStr); // "Hello world!"`,
    code2: ``,
    code3: ``
  },
  {
    id: 21,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'length',
    tags: ['string-methods'],
    name: 'Length',
    title: 'Length',
    like: true,
    desc1: 'Свойство length возвращает количество символов в строке.',
    desc2: 'Оно не изменяет строку.',
    desc3: '',
    code1: `let str = "Hello, world!";
     let length = str.length;
     console.log(length); // 13`,
    code2: ``,
    code3: ``
  },
  {
    id: 22,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'search',
    tags: ['string-methods'],
    name: 'Search',
    title: 'Search',
    like: true,
    desc1:
      'Метод search ищет совпадения с регулярным выражением в строке и возвращает индекс первого совпадения или -1, если совпадений не найдено.',
    desc2: 'Он возвращает индекс первого совпадения, а не массив совпадений.',
    desc3: '',
    code1: `let str = "Hello, world!";
    let regex = /world/;
    let searchIndex = str.search(regex);
    console.log(searchIndex); // 7`,
    code2: ``,
    code3: ``
  },
  {
    id: 23,
    subject: 'javascript',
    chapter: 'string-methods',
    slug: 'toString',
    tags: ['string-methods'],
    name: 'ToString',
    title: 'ToString',
    like: true,
    desc1: 'Метод toString преобразует объект в строку.',
    desc2: 'Он возвращает строковое представление объекта.',
    desc3: '',
    code1: `let obj = { name: "John", age: 30 };
    let str = obj.toString();
    console.log(str); // "[object Object]"`,
    code2: ``,
    code3: ``
  }
]

export const stringMethods = {
  id: 5,
  subject: 'javascript',
  slug: 'string-methods',
  tags: [
    'split',
    'charAt',
    'charCodeAt',
    'toUpperCase',
    'toLowerCase',
    'trim',
    'indexOf',
    'lastIndexOf',
    'includes',
    'slice',
    'substring',
    'replace',
    'replaceAll',
    'repeat',
    'parseInt',
    'isNaN',
    'startsWith',
    'endsWith',
    'match',
    'concat',
    'length',
    'search',
    'toString'
  ],
  name: 'String Methods',
  title: 'String Methods',
  like: true,
  desc1:
    'Строковые методы Javascript — это функции, которые используются для управления/изменения содержимого строк.',
  desc2: '',
  desc3: '',
  code1: ``,
  code2: ``,
  code3: ``,
  data: ''
}
