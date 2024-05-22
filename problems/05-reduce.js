/*
Given the `friends` array, use the `Array.reduce()` method to get the
sum of all the years of friendship with all the friends in the array. Assign the
output of `Array.reduce()` to the `totalYears` variable.
*/
/*POLYAS:
I: friends array
O: number (totalyears)
steps:
1. define a function called sumYears, with friends object as parameter
1A; Deconstruct obj
2. set up the array reduce method
    2a: Add friend[i]'years into the accumulator
    2b. Return final accumulator
3: Assign output of array.reduce function to the total Year's variable
  3c: Call the function when you assign it
*/

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3,
  },
  {
    name: "Angela",
    yearsOfFriendship: 2,
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8,
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6,
  },
];

// Hint: create an array of vowels to use in your solution.
const totalYears = sumYears(friends);

function sumYears(friends) {
  friends.reduce((accumulator, currentValue) => {
    accumulator + currentValue, 0;
    let { yearsOfFriendship } = friends;
    console.log(friends);
  });
}

// console.log(totalYears); // 19

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = totalYears;
} catch {}
