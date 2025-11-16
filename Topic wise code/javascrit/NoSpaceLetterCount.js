let word = "Hello world 3109202";

let spaces = 0;
let letters = 0;
let numbers = 0;

for (let i = 0; i < word.length; i++) {
  const element = word[i];

  if (element >= "0" && element <= "9") {
    numbers++;
  } else if (element === " ") {
    spaces++;
  } else if (
    (element >= "a" && element <= "z") ||
    (element >= "A" && element <= "Z")
  ) {
    letters++;
  }
}

console.log(`space is a string ${spaces}
letter is a string ${letters}
number is a string ${numbers}
`);
