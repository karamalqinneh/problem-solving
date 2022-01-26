const mostExpensive = (budget, mouseArray, keyBoardArray) => {
  // write your code here
  let mostExpensiveSet = 0;
  for (let i = 0; i < mouseArray.length; i++) {
    for (let j = 0; j < keyBoardArray.length; j++) {
      if (
        mouseArray[i] + keyBoardArray[j] >= mostExpensiveSet &&
        mouseArray[i] + keyBoardArray[j] <= budget
      ) {
        mostExpensiveSet = mouseArray[i] + keyBoardArray[j];
        console.log(mostExpensiveSet);
      }
    }
  }
  return mostExpensiveSet;
};

mostExpensive(150, [35, 15, 75], [5, 150, 100]);
