// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }
//
//
// for (let i = 0; i <= 200; i += 2) {
//   console.log(i);
// }

//can't get this one to work right come back to it later
const catSayings = ["..human...why you taking pictures of me?...", "..the catnip made me do it...", "..why does the red dot always get away.."]
for (let i = 0; i <= 20; i++) {
  console.log("Love me,pet me!");
  if (i % 2 === 0) {
      let random = catSayings[Math.floor(Math.random() * catSayings.length)];
      console.log(random);
  }
}
