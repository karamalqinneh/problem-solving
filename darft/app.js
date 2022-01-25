const courses = [
  {
    course: "Java",
    Instructor: "David",
    Students: ["Lincoln", "Ruth", "Briana", "Suzy", "Greta"],
    GroupName: "Stars",
  },
  {
    course: "JavaScript",
    Instructor: "Van",
    Students: ["Alphonso", "Daley", "Dax", "Karter", "Jorja"],
    GroupName: "Nerd-ware",
  },
  {
    course: "Python",
    Instructor: "Delaney",
    Students: ["Barney", "Kalé", "Alisha"],
    GroupName: "Whats-Up",
  },
  {
    course: "DotNet",
    Instructor: "Keanna",
    Students: ["Oli", "Gisselle", "Pru"],
    GroupName: "Lol",
  },
];

// Input: ['Kalé', 'Alisha','Alphonso', 'Briana']
// Output:
// [
//   {
//     Student: 'Kalé',
//     course: 'Python'
//   },
//   ...
// ]

//  ------------------------------------------------------------------------------------------------------

const getStudents = (arr, obj) => {
  // write your code here
  let output = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let result = obj.filter((ele) => {
      return ele.Students.indexOf(arr[i]) >= 0;
    });
    output.push({
      Student: arr[i],
      course: result[0].course,
    });
  }
  return output;
};

console.log(getStudents(["Daley", "Pru"], courses));
console.log();
