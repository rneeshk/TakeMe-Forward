let fullname = prompt("Enter your username");
let convertToLower = fullname.toLocaleLowerCase();
let removeSpaceInBetween = convertToLower.replace(/\s+/g, '');
let removeLeadingSpace = removeSpaceInBetween.trim();
let username = '@' + removeLeadingSpace + removeLeadingSpace.length;
console.log(username);