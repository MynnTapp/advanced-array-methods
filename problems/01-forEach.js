/*
Given the array `friends` below, use the `Array.forEach()` method to iterate through each element and print the `name` and `yearsOfFriendship` properties stylized as "`name`: `yearsOfFriendship` years".

For example: "Albert: 3 years"
*/

/**** POLYA:
 *
 input: array of objects
 output: strings

01: Declare function called (_________) and param(friends)
 02: declare the function for each friend
 03: put in the for each method and pass in the friends array object as the argument.
 04: code block: destructure the current object, and console.log the result of the destructure.
 06: return the output

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
let forEachfriend = friends =>{
  friends.forEach((friend) =>{console.log(friend))
  let {name, yearsOfFriendship} = friends;
  console.log(friend.name, friend.yearsOfFriendship)
}}




/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/
