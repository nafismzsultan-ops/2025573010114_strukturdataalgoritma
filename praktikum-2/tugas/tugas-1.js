for (let i = 1; i <= 50; i++) {

  // cek jika habis dibagi 3 dan 5
  if (i % 15 === 0) {
    console.log("FizzBuzz");

  // cek jika habis dibagi 3 saja
  } else if (i % 3 === 0) {
    console.log("Fizz");

  // cek jika habis dibagi 5 saja
  } else if (i % 5 === 0) {
    console.log("Buzz");

  // jika tidak memenuhi kondisi apapun
  } else {
    console.log(i);
  }

}