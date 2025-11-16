// Task 1: Validate email address
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Task 2: Validate password
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Task 4: Check if a string contains a valid URL
function validateURL(url) {
    const urlRegex = /^(https?:\/\/)?([a-z\d-]+\.)+[a-z]{2,}(\/[^\s]*)?$/i;
    return urlRegex.test(url);
}

// Example usage:
console.log(validateEmail("example@test.com")); // true
console.log(validatePassword("Password1@"));    // true
console.log(validateURL("https://example.com")); // true

// Task 3: Extract all dates in YYYY-MM-DD format
function extractDates(text) {
    const dateRegex = /\b\d{4}-\d{2}-\d{2}\b/g;
    let result;
    const dates = [];
    while ((result = dateRegex.exec(text)) !== null) {
        dates.push(result[0]);
    }
    return dates;
}

// Task 5: Find all phone numbers in text
function findPhoneNumbers(text) {
    const phoneRegex = /\b\d{10}\b/g;
    return text.match(phoneRegex) || [];
}

// Task 6: Find all words longer than 5 characters
function findLongWords(text) {
    const wordRegex = /\b\w{6,}\b/g;
    return Array.from(text.matchAll(wordRegex)).map(match => match[0]);
}

// Task 7: Check if a string starts with a specific word
function startsWithWord(text, word) {
    const wordRegex = new RegExp(`^${word}`, "i");
    return wordRegex.test(text);
}

// Task 8: Split string into words and remove punctuation
function splitAndClean(text) {
    return text.split(/[\s,.!?]+/).filter(Boolean);
}

// Example usage:
const text = "The event is on 2024-11-25. Call 1234567890 or visit example.com.";
console.log(extractDates(text));         // ['2024-11-25']
console.log(findPhoneNumbers(text));    // ['1234567890']
console.log(findLongWords(text));       // ['example', '1234567890']
console.log(startsWithWord(text, "The")); // true
console.log(splitAndClean(text));       // ['The', 'event', 'is', 'on', '2024-11-25', 'Call', '1234567890', 'or', 'visit', 'example', 'com']
