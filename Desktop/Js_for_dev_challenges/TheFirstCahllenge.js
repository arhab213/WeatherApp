const arr = [2, 6, 8, 7, 3, 2];
function averageEven(arr) {
  const newArr = arr.filter((v) => v % 2 == 0);
  let i = 0;
  const Av = newArr.reduce((p, c) => {
    i++;
    return p + c;
  }, 0);
  return Av / i;
}
console.log(averageEven(arr));
