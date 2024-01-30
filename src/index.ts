//console.log("hello world")

const persons = [
  { name: "Joshua", age: 25 },
  { name: "Boris", age: 54 },
  { name: "Franco", age: 89 },
];

type Person = { name: string; age: number };

const names = persons.map((person) => person.name);

console.log(names);

//implement map function

const map = (array: Person[], converter: (person: Person) => number) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const person = array[i];
    result.push(converter(person));
  }
  return result;
};

const onlyNames = map(persons, (person) => person.age);

console.log(onlyNames);
