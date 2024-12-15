/* Find anagrams in an array   

When two words have the exact same letters, they are anagrams. 

Each item in the anagrams array is an anagram of a Scrimba teacher's
first and last name, plus the phrase "Scrimba teacher". 

Write a function to determine which strings in the array are 
anagrams of "Bob Ziroll Scrimba Teacher".

Your function should take two parameters: the phrase you want to compare to
the anagrams, and an array of anagrams. The function should return
a new array of anagrams that match the phrase. 

Example input: treat, ["tater", "tree", "teart", "tetra", "heart", "hamster"]
Example output: ["tater", "teart", "tetra"]

Bonus: What other teachers are represented in these anagrams? 
 */

const anagrams = [
  "moz biblical torchbearers",
  "it's razorbill beachcomber",
  "och mcrobbie trailblazers",
  "bib chorizo cellarmaster",
  "thor scribble carbimazole",
  "zilla borscht abercrombie",
  "brazil scorcher batmobile",
  "dame shelburne characterizing",
  "uber englishman characterized",
  "agnes rhumbline characterized",
  "rehab scrutinized charlemagne",
  "dreams zurich interchangeable",
  "bam hamster technocratic",
  "mechatronic masterbatch",
  "bam ratchet mechatronics",
];

function isAnagramInArray(anagram, arr) {
  //empty array to capture anagrams
  let emptyArray = [];
  //looping through the array of strings
  arr.forEach((anag) => {
    //storing looped strings as letters in alphabetical order
    let arrayString = anag
      .replaceAll(" ", "")
      .replaceAll("'", "")
      .split("")
      .sort();
    //the anagram string is filtered to letters in alphabetical order
    let testAnagram = anagram
      .replaceAll(" ", "")
      .toLowerCase()
      .split("")
      .sort();
    //if the joined strings are equals, the looped strings are anagrams, hence captured
    if (arrayString.join("") === testAnagram.join("")) {
      emptyArray.push(anag);
    }
  });
  //passing all captured anagrams
  return emptyArray;
}

console.log(isAnagramInArray("Bob Ziroll Scrimba Teacher", anagrams));

//Output: ['moz biblical torchbearers', 'it's razorbill beachcomber', 'och mcrobbie trailblazers', 'thor scribble carbimazole', 'zilla borscht abercrombie', 'brazil scorcher batmobile']
