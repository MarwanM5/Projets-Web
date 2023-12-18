export function fizzBuzz(num) {
    let numpy = "";
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        
        numpy += "FizzBuzz"
        //console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        numpy += "Fizz"
        //console.log("Fizz");
      } else if (i % 5 === 0) {
        numpy += "Buzz"
        //console.log("Buzz");
      } else {
        numpy += i
        //console.log(i);
      }
      numpy += ", "
    }
    numpy = numpy.slice(0, -2);
    console.log(numpy);
  }
  
  fizzBuzz(20);



