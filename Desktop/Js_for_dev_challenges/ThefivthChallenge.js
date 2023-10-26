const peopleArray = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];
function countPeopleByCity(peopleArray) {
  const cityCountObject = peopleArray.reduce((acc, person) => {
    const city = person.city;
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  return cityCountObject;
}
console.log(countPeopleByCity(peopleArray));
