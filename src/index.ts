//console.log("hello world")

const persons = [
  { name: "Joshua", age: 25 },
  { name: "Boris", age: 54 },
  { name: "Franco", age: 89 },
];

type Person = { name: string; age: number };

const names = persons.map((person) => person.name);

//igy is haznalhato lenne mert lent megirtam kulon functionben
//const names = persons.map(converterFunction);

console.log(names);

//implement map function

/* const map = (
  array: Person[],
  converter: (person: Person) => string
): string[] => {
  let result: string[] = [];
  for (let i = 0; i < array.length; i++) {
    const person = array[i];
    result.push(converter(person));
  }
  return result;
}; */

//const onlyNames = map(persons, (person) => person.name);

//console.log(onlyNames);

// real life pelda

/* const onlyNamesHTML = map(
  persons,
  (person) => `<p>${person.name} (${person.age})</p>`
); */

//console.log(onlyNamesHTML);

//kiszervezve a converter function, akkor van ertelme ha tobb helyen ujra hasznaljuk, jellemzoen nem hasznaljuk ujra fel, ezert jobb helyben egy sorban megirva

/* function converterFunction(x: Person) {
  return `<p>${x.name} (${x.age})</p>`;
} */

//const onlyNamesHTML2 = map(persons, converterFunction);

//console.log(onlyNamesHTML2);

//hianyzo absztrakcio generikus function

const map = <InputType, OutputType>(
  array: InputType[],
  converter: (input: InputType) => OutputType
): OutputType[] => {
  let result: OutputType[] = [];
  for (let i = 0; i < array.length; i++) {
    const input = array[i];
    result.push(converter(input));
  }
  return result;
};

const onlyNamesHTML = map(
  persons,
  (person) => `<p>${person.name} (${person.age})</p>`
);

console.log(onlyNamesHTML);
