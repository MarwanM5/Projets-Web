function range(start, end, step = 1) {
    
  
    
  
    const arr1 = [];
    if (start <= end) {
      for (let i = start; i <= end; i += step) {
        arr1.push(i);
      }
    } else {
      for (let i = start; i >= end; i += step) {
        arr1.push(i);
      }
    }
  
    return arr1;
  }
  
  module.exports = range;
  
