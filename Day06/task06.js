function objectsDeeplyEqual(obj1, obj2) {
    if (obj1 === obj2) {
      return true; // If both objects are the same reference, they are equal
    }
  
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return false; // If either one of them is not an object, they are not equal
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false; // If they have a different number of properties, they are not equal
    }
  
    for (const key of keys1) {
      if (!keys2.includes(key) || !objectsDeeplyEqual(obj1[key], obj2[key])) {
        return false; // If a key is missing or values are not deeply equal, they are not equal
      }
    }
  
    return true; // If all checks pass, the objects are deeply equal
  }
  
  

  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { a: 1, b: { c: 2 } };
  const obj3 = { a: 1, b: { c: 3 } };
  
  console.log(objectsDeeplyEqual(obj1, obj2)); // true
  console.log(objectsDeeplyEqual(obj1, obj3)); // false
  