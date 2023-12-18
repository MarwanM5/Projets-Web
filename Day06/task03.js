// task03.js
export function countGs(String) {
    let count = 0;
  
    for (let i = 0; i < String.length; i++) {
      if (String[i] === 'G') {
        count++;
      }
    }
  
    return count;
  }
  
  const String = 'GGGGGreat';
  const result = countGs(String);
  


