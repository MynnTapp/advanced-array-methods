/*
Given the `friends` array below,
  use the `Array.map()` method to map the current array to an array of ***booleans** representing whether or not
  the friend has been friends with the user for more than 5 years.

Assign the output of `Array.map()` to the `goodFriendsOrNot` variable.
*/
/* POLYAS:
I: friends array
O: new array that consists of booleans
steps:
1. define the function called goodFriendsMap. param(friends)
2. apply the map method to the friends array to start the looping 
  2a: apply the function to each friend
3. the result should array of booleans
4. the result of the function would be assigned to the goodfriends or not variables.

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
 let goodfriendsMap = friends =>{
friends.map((friend) => yearsOfFriendship > 5)
 }
const goodFriendsOrNot = goodfriendsMap
console.log(goodFriendsOrNot);          // [false, false, true, true]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = goodFriendsOrNot;
} catch {}
