// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  for (let char of str) {
    if (vowels.includes(char)) {
      result += '*'; 
    } else {
      result += char; 
    }
  }
  return result;
}
console.log(replaceVowels("hello world")); 
console.log(replaceVowels("Javascript"));  
module.exports = replaceVowels;
