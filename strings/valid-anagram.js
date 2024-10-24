// tenho que colocar tudo em minusculo
// tem que ter no minimo 1 caractere e no máximo 50mil

function isAnagram(s, t) {
  s = s.toLowerCase();
  t = t.toLowerCase();
  let arrayS = s.match(/\w/g);
  let arrayT = t.match(/\w/g);
  let newArrayAnagram = [];
  let result = true;

  if (s.length >= 1 && t.length >= 1) {
    for (let i = 0; i < arrayS.length; i++) {
      for (let j = 0; j < arrayT.length; j++) {
        if (arrayS[i] == arrayT[j]) {
          newArrayAnagram.push([arrayS[i], arrayT[j]]);
          arrayS.splice(i, 1);
          arrayT.splice(j, 1);
          i = -1;
        }
      }
    }
    if(arrayS.length === 0 && arrayT.length === 0) {
        newArrayAnagram.forEach((item) => {
            if(item.length === 2) {
                result = true
            }
        })
        console.log(result);
    } else {
        console.log(false)
    }
  } else {
    console.log(false)
  }
}

isAnagram("anagram", "nagaram");