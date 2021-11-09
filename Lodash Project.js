const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue; 
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    const isInRange = start <= number && number < end;
    return isInRange;
  },
  words(str) {
    let word = str.split(' ');
    return word;
  },
  pad (para, numb) {
    if (para.length >= numb) {
        return para;
  } if(para.length < numb) {
    const startPaddingLength = Math.floor((numb - para.length)/2);
    const endPaddingLength = numb - para.length - startPaddingLength;
    paddedString = ' '.repeat(startPaddingLength) + para + ' '.repeat(endPaddingLength);
    return paddedString;
    }
  },
  has(object, key) {
    const hasValue = object[key];
    if(hasValue != undefined) {
      return true;
    } return false;
  },
  invert(object) {
    let invert = {};
  for (let obj in object) {
    const originalValue = object[obj];
    invert[originalValue] = obj;  
  }
   return invert;
    

  },
  findKey(object, func) {
    for(let key in object) {
      const value = object[key];
      funcReturnValue = func(value)
      if(funcReturnValue) {
        return key
      };
  }; 
    return undefined;
  },
  drop(arr, num) {
    if(num === undefined) {
      num = 1;
      
    } droppedArray = arr.slice(num)
    return droppedArray;
  },
  dropWhile(array, predicate) {
    const cb = (element, index) => {
      return !predicate(element, index, array);
    }
    const dropNumber = array.findIndex(cb) 
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size=1) {
    let arrayChunks  = [];
    if(size === undefined) {
    } 
    for (let i = 0; i<array.length; i+=size) {
      let arrayChunk = array.slice(i, i+size)
      arrayChunks.push(arrayChunk); 
    }
    return arrayChunks;
  }

};





// Do not write or modify code below this line.
module.exports = _;