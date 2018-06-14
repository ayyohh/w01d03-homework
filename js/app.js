// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
//
//
// for (let i = 0; i <= 200; i += 2) {
//   console.log(i);
// }
//
// //can't get this one to work right come back to it later
// const catSayings = ["..human...why you taking pictures of me?...", "..the catnip made me do it...", "..why does the red dot always get away.."]
// for (let i = 0; i <= 20; i++) {
//   console.log("Love me,pet me!");
//   if (i % 2 === 0) {
//       let random = catSayings[Math.floor(Math.random() * catSayings.length)];
//       console.log(random);
//   }
// }

// //can't find out how to write these all together
// for (let i = 1; i <= 100; i++){
//   console.log(i);
// }
//
// for (let i = 1; i <= 100; i++){
//   if(i % 3 === 0){
//     console.log("Fizz");
//   }
// }
//
// for (let i = 1; i <= 100; i++){
//   if(i % 5 === 0){
//     console.log("Buzz");
//   }
// }
//
// for (let i = 1; i <= 100; i++){
//   if ((i % 3 === 0) && (i % 5 === 0)) {
//     console.log("FizzBuzz");
//   }
// }




const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom.splice(0, 1, "GameBoy");
console.log(thom);

karolin.splice(1, 1, 17);
console.log(karolin);

matt.splice(2, 1, "Gotham City");
console.log(matt);

kristyn.splice(2, 1, "Brooklyn");
console.log(kristyn);
