export function arrayFiltering(array, test) {
    
  
    const filteredArray = [];
  
    for (const element of array) {
      if (test(element)) {
        filteredArray.push(element);
      }
    }
  
    return filteredArray;
  }
  

  



/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isEven = (number) => number % 3 === 0;
const evenNumbers = arrayFiltering(numbers, isEven);
console.log(evenNumbers);*/
