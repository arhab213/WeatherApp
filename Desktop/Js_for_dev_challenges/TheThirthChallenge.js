let arr = [
  { name: "When Breath Becomes Air", author: "Paul Kalanithi", pages: 228 },
  { name: "Can't Hurt Me", author: "David Goggings", pages: 307 },
  { name: "L'art de perdre", author: "Alice Zeniter", pages: 600 },
];
function TheFonction(arr) {
  let elem = [];
  arr.map((e) => {
    elem.push(e.pages);
  });
  const sum = elem.reduce((p, c) => {
    return p + c;
  });
  return sum / elem.length;
}
console.log(TheFonction(arr));

// Better way without using map() :

// let arr=[{name:"When Breath Becomes Air",author:"Paul Kalanithi",pages:228},{name:"Can't Hurt Me",author:"David Goggings",pages:307},{name:"L'art de perdre",author:"Alice Zeniter",pages:600}]
// function TheFonction(arr){
//       let i=0
//     const sum=arr.reduce((p,c)=>{
//         i++
//         return p+c.pages
//     },0)
//     return sum/i

// }
//     console.log(TheFonction(arr))
