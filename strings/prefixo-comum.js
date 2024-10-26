function longestCommonPrefix(v) {
  let newV = [];
  let vetA = [];
  let vetB = [];
  let vetC = [];
  let prefix = "";
  v.forEach((element) => {
    newV.push(element.toLowerCase());
  });
  vetA = newV[0].match(/\w/g);
  vetB = newV[1].match(/\w/g);
  vetC = newV[2].match(/\w/g);

  for (let i = 0; i < vetA.length; i++) {
    if (vetA[i] === vetB[i] && vetA[i] === vetC[i]) {
      prefix += vetA[i];
    } else {
      console.log(prefix);
      return "";
    }
  }
}

longestCommonPrefix(["dog","racecar","car"]);
