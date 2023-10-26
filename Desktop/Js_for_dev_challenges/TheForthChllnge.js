const inputArray = ["hello", "world", "hello"];
function countStringFrequency(strings) {
  const frequencyObject = strings.reduce((acc, currentString) => {
    acc[currentString] = (acc[currentString] || 0) + 1;
    return acc;
  }, {});

  return frequencyObject;
}
console.log(countStringFrequency(inputArray));
