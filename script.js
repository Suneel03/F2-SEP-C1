let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
  { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
  { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
];

// Print Developers (PrintDeveloper function): Log all developers from the array to the console.
function PrintDeveloper() {
  const developers = arr.filter(person => person.profession === 'developer');
  console.log(developers);
}

// Add Data (addData function): Add a new data object to the array using details collected from a prompt.
function addData() {
  const person = {};
  person.id = arr.length + 1;
  person.name = prompt('Enter name:');
  person.age = parseInt(prompt('Enter age:'));
  person.profession = prompt('Enter profession:');
  person.salary = parseInt(prompt('Enter salary:'));
  arr.push(person);
  console.log(arr);
}

// Remove Admins (removeAdmin function): Extract and remove all admins from the array.
function removeAdmin() {
  arr = arr.filter(person => person.profession !== 'admin');
  console.log(arr);
}

// Concatenate Array (concatenateArray function): Combine two arrays (create a dummy array as an example) and log the result.
function concatenateArray() {
  const dummyArray = [
    { id: 4, name: 'emma', age: 22, profession: 'manager', salary: 1200 },
    { id: 5, name: 'michael', age: 25, profession: 'developer', salary: 1300 },
  ];
  const combinedArray = [...arr, ...dummyArray];
  console.log(combinedArray);
}

// Average Age (averageAge function): Compute and log the average age of all people in the array.
function averageAge() {
  const totalAge = arr.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / arr.length;
  console.log(`Average Age: ${average}`);
}

// Age Check (checkAgeAbove25 function): Validate if there's at least one person in the array who's older than 25.
function checkAgeAbove25() {
  const isAbove25 = arr.some(person => person.age > 25);
  console.log(`Is there anyone above 25? ${isAbove25}`);
}

// Unique Professions (uniqueProfessions function): Log all distinct professions present in the array.
function uniqueProfessions() {
  const professions = [...new Set(arr.map(person => person.profession))];
  console.log(professions);
}

// Sort by Age (sortByAge function): Organize the array by age in ascending order.
function sortByAge() {
  arr.sort((a, b) => a.age - b.age);
  console.log(arr);
}

// Update Profession (updateJohnsProfession function): Adjust 'john's profession to 'manager'.
function updateJohnsProfession() {
  const john = arr.find(person => person.name === 'john');
  if (john) {
    john.profession = 'manager';
  }
  console.log(arr);
}

// Profession Count (getTotalProfessions function): Calculate and print the total number of developers and admins in the array.
function getTotalProfessions() {
  const developerCount = arr.filter(person => person.profession === 'developer').length;
  const adminCount = arr.filter(person => person.profession === 'admin').length;
  console.log(`Total Developers: ${developerCount}, Total Admins: ${adminCount}`);
}


