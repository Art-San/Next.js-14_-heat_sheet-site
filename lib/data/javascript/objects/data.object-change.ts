const badVarObj = `let person = {
  name: "John Doe",
  occupation: "Software Developer"
};

// Попытка добавить новое свойство напрямую к объекту
person.age = 30;

console.log(person);
// Вывод: { name: "John Doe", occupation: "Software Developer", age: 30 }`

const goodVarObj = `let person = {
  name: "Jane Doe",
  occupation: "Data Scientist"
};

// Создаем новый объект с теми же свойствами, что и оригинал, плюс новое свойство
let newPerson = { ...person, age: 28 };

console.log(newPerson);
// Вывод: { name: "Jane Doe", occupation: "Data Scientist", age: 28 }

console.log(person);
// Вывод: { name: "Jane Doe", occupation: "Data Scientist" }`

const badVarArr = `// вар 1, плохой вариант.
// Это изменяет исходный массив, что является изменяемостью
export default function StoryTray({ stories }) {
  const items = stories 
  items.push({
    id: 10,
    title: 'Story Title 10',
    description: 'This is a short description of story 10.',
    status: 'On Hold',
    priority: 'High'
  })

  return (
    <ul>
      {items.map((story) => (
        <li key={story.id}>{story.title}</li>
      ))}
    </ul>
  )
}`

const goodVarArr1 = `// вар 2. хороший вариант
// Изменяем новый массив
export default function StoryTray({ stories }) {
  const items = stories.slice()
  items.push({
    id: 10,
    title: 'Story Title 10',
    description: 'This is a short description of story 10.',
    status: 'On Hold',
    priority: 'High'
  })

  return (
    <ul>
      {items.map((story) => (
        <li key={story.id}>{story.title}</li>
      ))}
    </ul>
  )
}`
