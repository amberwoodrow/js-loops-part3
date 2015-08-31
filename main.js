var students = [
    {
     name: 'Derek',
     age: 25,
     city: 'Boulder'
    },
    {
     name: 'Liz',
     age: 28,
     city: 'Denver'
    },
    {
     name: 'Carl',
     age: 31,
     city: 'Boulder'
    },
    {
     name: 'Peter',
     age: 23,
     city: 'Boulder'
    },
    {
     name: 'Megan',
     age: 19,
     city: 'Denver'
    }
  ];

console.log("Problem 1");
for (var i = 0; i < students.length; i++) {
  console.log(students[i].age);
}

console.log("\nProblem 2");
for (var i = 0; i < students.length; i++) {
  console.log(students[i].name + ', ' + students[i].city);
}

console.log("\nProblem 3");
for (var i = 0; i < students.length; i++) {
  console.log(students[i].name + " is from " + students[i].city);
}

console.log("\nProblem 4");
for (var i = 0; i < students.length; i++) {
  if (students[i].age > 25) {
    console.log(students[i].name + " is older then 25"); 
  }
}