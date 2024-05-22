/*
Given the `friends` array below, use the `Array.find()` method to get the first
friend whose name contains 3 or more vowels. Assign the output of
`Array.find()` to the `threeVowelFriend` variable.
*/

/*
input: array called friends
output: array of object(s) that meet that criteria

01: Define function (findFriend) and param (friends)
  A) Assign variable called vowels (aeiouAEIOU)
02: Use the find method to find the first instance of when
  A) Destructure objects to get name
  B) Check if name contains 3 or more vowels
    >>> method will return IF TRUE
03: Return call back function
04: Assign threeVowelFriend to called call back function

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

// Hint: create an array of vowels to use in your solution.
//const threeVowelFriend;

function findFriend (friends){
  let vowels = "aeiouAEIOU";
  return friends.find((friend) => {
    let { name } = friend;
    let counter = 0;
    for (let i = 0; i < name.length; i++){
      if (vowels.includes(name[i])){
        counter++
        console.log(counter)
      }
    }
      return counter >= 3


  })
}

const threeVowelFriend = findFriend(friends)

console.log(threeVowelFriend); // [ { name: 'Angela', yearsOfFriendship: 2 } ]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/

try {
  module.exports = threeVowelFriend;
} catch {}
