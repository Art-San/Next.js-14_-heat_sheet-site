export const dataObjExamples = [
  {
    id: 1,
    subject: 'javascript',
    chapter: 'object',
    slug: 'immutability',
    tags: ['immutability'],
    name: 'Immutability',
    title: 'Иммутабельность',
    like: false,
    desc1: 'Концепция иммутабельностии в JavaScript в контексте объектов.',
    desc2:
      'Неизменяемым (англ. immutable) называется объект, состояние которого не может быть изменено после создания.',
    desc3:
      'Результатом любой модификации такого объекта всегда будет новый объект, при этом старый объект не изменится.',
    code1: `// Пример без использования иммутабельности
    let person = {
      name: "John Doe",
      occupation: "Software Developer"
    };
    
    // Попытка добавить новое свойство напрямую к объекту
    person.age = 30;
    
    console.log(person);
    // Вывод: { name: "John Doe", occupation: "Software Developer", age: 30 }`,
    code2: `// Пример с использованием иммутабельности
    let person = {
      name: "Jane Doe",
      occupation: "Data Scientist"
    };
    
    // Создаем новый объект с теми же свойствами, что и оригинал, плюс новое свойство
    let newPerson = { ...person, age: 28 };
    
    console.log(newPerson);
    // Вывод: { name: "Jane Doe", occupation: "Data Scientist", age: 28 }
    
    console.log(person);
    // Вывод: { name: "Jane Doe", occupation: "Data Scientist" }`,
    code3: ``
  }
]

export const object = {
  id: 3,
  subject: 'javascript',
  slug: 'object',
  tags: ['immutability'],
  name: 'Object',
  title: 'Object',
  like: false,
  desc1:
    'Объект в JavaScript — это коллекция свойств, где каждое свойство состоит из пары ключ-значение.',
  desc2:
    'Свойства могут быть различных типов: строк, чисел, булевы значения, другие объекты и даже функции. ',
  desc3:
    'Объекты используются для организации данных и логической структуризации кода.',
  code1: `const person = {
    name: "Alice",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  console.log(person.name); // Alice
  person.greet(); // Hello, my name is Alice`,
  code2: '',
  code3: '',
  data: dataObjExamples
}
