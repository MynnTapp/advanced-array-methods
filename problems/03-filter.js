/*
Given the array `friends` below, use the `Array.filter()` method to filter the
array to only contain friends whose name starts with an "A" and who has been
friends for over 5 years. Assign the output of `Array.filter()` to the
`filteredFriends` variable.
*/
/*POLYA:
I: array
O: array
step 1: define the function and the paremeter (function name is filter and the parameter name is friends)
step 2: use the filter method to start the looping
step 3: test if the friends name starts with "A" and have been friends for more than five years
    step 3a: use object destructuring
    step 3b: return the booleans and then the methods results
step 4: the filteredFriends get assigned to the called callback function

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

let filter = friends =>{
  let {name, yearsOfFriendship} = friends
return friends.filter((friend) => friend.startsWith("A") && yearsOfFriendship > 5)
}

const filteredFriends;

// console.log(filteredFriends); // [ { name: "Agatha", yearsOfFriendship: 6 } ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = filteredFriends;
} catch {}
