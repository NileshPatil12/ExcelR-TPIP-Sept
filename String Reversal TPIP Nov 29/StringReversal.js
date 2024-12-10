const prompt = require("prompt-sync")();

// Function to reverse the characters of a word
function reverseWord(word) {
  return word.split("").reverse().join("");
}

// Function to reverse the sentence word by word and also reverse each word
function reverseSentence(sentence) {
  // Base case: if the sentence has no spaces, reverse the word
  if (!sentence.includes(" ")) {
    return reverseWord(sentence);
  }
  
  const lastSpaceIndex = sentence.lastIndexOf(" ");
  const lastWord = sentence.slice(lastSpaceIndex + 1); 
  const remainingSentence = sentence.slice(0, lastSpaceIndex); 

  console.log(`last Space Index => ${lastSpaceIndex}`);
  console.log(`last Word => ${lastWord}`);
  console.log(`Remaining Sentence => ${remainingSentence}`);

  return reverseWord(lastWord) + " " + reverseSentence(remainingSentence);
}

const input = prompt("Enter a sentence ");

if (input && input.trim().length > 0) {
  console.log(`Original Sentence: "${input}"`);
  console.log(`Reversed Sentence: "${reverseSentence(input.trim())}"`);
} else {
  console.log("Invalid input. Please enter a valid sentence.");
}
