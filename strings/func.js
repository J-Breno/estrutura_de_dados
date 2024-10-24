const str1 = "Hello, ";
const str2 = "World!";
const str3 = "This is a test. Testing, test one, two, three.";
const str4 = "Mozilla";

console.log(`str1: "${str1}"`)
console.log(`str2: "${str2}"`)
console.log(`str3: "${str3}"`)
console.log(`str4: "${str4}"`)

// concat() = Combina o texto de duas ou mais strings e retorna uma nova string.
let concatenated = str1.concat(str2);
console.log(`str1.concat(str2): ${concatenated}`)

// indexOf() - Retorna o índice da primeira ocorrência de um valor especificado em uma string, ou -1 se não for encontrado.

console.log("str3.indexOf('Test'):", str3.indexOf("Test"));