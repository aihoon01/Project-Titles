const Calculate = {
    factorial (numa) {
      let num = Math.max(numa);
      if(num === 0) {
        return 1;
      } else {
      for (let i = 1; i < numa; i++) {
         num *= i;
        
      }  return num
    }
    }
  }
  
  
    
  
  
  module.exports = Calculate;
  
  
  