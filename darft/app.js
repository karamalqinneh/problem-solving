let data2 = {
  SchoolName: "David Academy",
  Capacity: 1000,
  grades: [
    {
      grade: "First",
      numberOFClasses: 3,
      classes: [
        {
          avg: 0,
          classNumber: "01",
          classScores: [89, 87, 45, 48, 89, 65, 21, 54, 78, 62, 51, 54, 50, 49],
        },
        {
          avg: 0,
          classNumber: "02",
          classScores: [
            87, 54, 95, 45, 41, 51, 25, 63, 58, 47, 64, 51, 98, 100,
          ],
        },
        {
          avg: 0,
          classNumber: "03",
          classScores: [74, 85, 20, 51, 59, 58, 62, 71, 74, 99, 84, 71, 38, 70],
        },
      ],
    },
    {
      grade: "Second",
      numberOFClasses: 2,
      classes: [
        {
          avg: 0,
          classNumber: "01",
          classScores: [71, 82, 86, 3, 1, 52, 91, 84, 44, 68, 64, 23, 80, 60],
        },
        {
          avg: 0,
          classNumber: "02",
          classScores: [86, 39, 71, 17, 61, 76, 60, 54, 42, 65, 49, 75, 96, 70],
        },
      ],
    },
    {
      grade: "Third",
      numberOFClasses: 2,
      classes: [
        {
          avg: 0,
          classNumber: "01",
          classScores: [11, 12, 28, 78, 57, 3, 54, 72, 14, 19, 88, 74, 68, 58],
        },
        {
          avg: 0,
          classNumber: "02",
          classScores: [62, 8, 35, 43, 96, 9, 97, 73, 4, 32, 18, 81, 70, 42],
        },
      ],
    },
    {
      grade: "Forth",
      numberOFClasses: 4,
      classes: [
        {
          avg: 0,
          classNumber: "01",
          classScores: [63, 71, 93, 87, 83, 85, 67, 49, 62, 45, 38, 48, 58, 52],
        },
        {
          avg: 0,
          classNumber: "02",
          classScores: [
            100, 45, 70, 75, 87, 63, 39, 46, 54, 68, 74, 96, 52, 49,
          ],
        },
        {
          avg: 0,
          classNumber: "03",
          classScores: [97, 54, 80, 95, 69, 31, 88, 84, 50, 81, 67, 34, 41, 87],
        },
        {
          avg: 0,
          classNumber: "04",
          classScores: [
            64, 96, 66, 38, 78, 58, 43, 100, 34, 56, 82, 53, 89, 72,
          ],
        },
      ],
    },
  ],
};

// const debugg = (data) => {
//   console.log(data.grades);
//   for (let i = 0; i <= data.grades.length - 1; i++) {
//     for (let j = 0; j <= data.grades[i].classes.length - 1; j++) {
//       let sum = 0;
//       for (
//         let k = 0;
//         k <= data.grades[i].classes[j].classScores.length - 1;
//         k++
//       ) {
//         sum += data.grades[i].classes[j].classScores[j];
//       }
//       data.grades[i].classes[j].avg = Math.floor(
//         sum / data.grades[i].classes[j].classScores.length
//       );
//       console.log(sum);
//     }
//   }
// };

const test = (data) => {
  for (let i = 0; i <= data.grades.length - 1; i++) {
    for (let j = 0; j <= data.grades[i].classes.length - 1; j++) {
      let sum = 0;
      for (
        let k = 0;
        k <= data.grades[i].classes[j].classScores.length - 1;
        k++
      ) {
        sum += data.grades[i].classes[j].classScores[k];
      }
      data.grades[i].classes[j].avg = Math.floor(
        sum / data.grades[i].classes[j].classScores.length
      );
    }
  }
};

test(data2);
console.log(data2);
