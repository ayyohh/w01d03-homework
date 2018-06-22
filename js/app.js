// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
//
//
// for (let i = 0; i <= 200; i += 2) {
//   console.log(i);
// }
//
//











const catSayings = ["..human...why you taking pictures of me?...", "..the catnip made me do it...", "..why does the red dot always get away.."]
for (let i = 0; i < 20; i++) {

  if (i % 2 === 0) {
      let random = catSayings[Math.floor(Math.random() * catSayings.length)];
      console.log(random);
  }else{
    console.log("Love me,pet me!");
  }
}












for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("FizzBuzz");
  }else if(i % 3 === 0) {
    console.log("Fizz");
  }else if (i % 5 === 0) {
    console.log("Buzz");
  }else{
    console.log(i);
  }
}



//
// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]
//
// thom.splice(0, 1, "GameBoy");
// console.log(thom);
//
// karolin.splice(1, 1, 17);
// console.log(karolin);
//
// matt.splice(2, 1, "Gotham City");
// console.log(matt);
//
// kristyn.splice(2, 1, "Brooklyn");
// console.log(kristyn);
//











const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (var i = 0; i < ninjaTurtles.length; i++) {
  let ninjas = ninjaTurtles[i].toUpperCase();
  console.log(ninjas);

}









const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];














for (let i = 0; i < 100; i++) {
  let sum = 0;
  if((i % 3 === 0) && (i % 5 === 0)) {
    sum += i;
    console.log(sum);
  }
}
