/*
Given the array `friends` below, use the `Array.forEach()` method to iterate through each element and print the `name` and `yearsOfFriendship` properties stylized as "`name`: `yearsOfFriendship` years".

For example: "Albert: 3 years"
*/

/**** POLYA:
 *
 input: array of objects
 output: newArray

01: Declare function called (_________) and param(friends)
02: Create a variable called newArray and assign to an empty array
03: Return array.forEach method

Output:
 */

const friends = [
  {
    name: "Albert",
    yearsOfFriendship: 3
  },
  {
    name: "Angela",
    yearsOfFriendship: 2
  },
  {
    name: "Freddy",
    yearsOfFriendship: 8
  },
  {
    name: "Agatha",
    yearsOfFriendship: 6
  }
];

// Your code here

friends.forEach((friend) => console.log(friend))



/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/
