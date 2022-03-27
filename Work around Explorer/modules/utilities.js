export const formatNumber = (number)=> {
    const stringed = String(Math.floor(number));
  
    for (let i = stringed.length; i > 0; i-= 3) {
      comNum = stringed.slice(0, i, ",")
    }
    return comNum.join("");
  };