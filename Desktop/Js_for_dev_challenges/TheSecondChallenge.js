let arr = ["Alasnd", "sd", "sdfdf", "dsfsdf", "fdsdfddd"];
function TheLongestWord(arr) {
  let result = arr.reduce((p, c) => {
    if (c.length > p.length) {
      p = c;
    }
    return p;
  });
  return result;
}
console.log(TheLongestWord(arr));
