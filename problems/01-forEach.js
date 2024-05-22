/*
Given the array `friends` below, use the `Array.forEach()` method to iterate through each element and print the `name` and `yearsOfFriendship` properties stylized as "`name`: `yearsOfFriendship` years".

For example: "Albert: 3 years"
*/

/**** POLYA:
 *
 input: array of objects
 output: strings

01: Declare function called (forEachfriend) and param(friends)
02: Put in the for each method and pass in the friends array object as the argument. For each object -
  A. destructure the current object
  B. console.log (name): (yearsofFriendship)
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
let forEachfriend = friends => {
  friends.forEach((friend) => {
    let {name, yearsOfFriendship} = friend;
    console.log
    return console.log(name + ": " + yearsOfFriendship + " years")
})
}

forEachfriend(friends);




/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/
