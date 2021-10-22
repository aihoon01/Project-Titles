let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


console.log(secretMessage.length)
secretMessage.pop()
console.log(secretMessage.length)

secretMessage.push('to', 'Program')
//console.log(secretMessage)

console.log(secretMessage.indexOf('easily'))
secretMessage[7] = 'right'
console.log(secretMessage[7])

//Removing first string of Array;
secretMessage.shift()
//console.log(secretMessage)

//Adding string to Array beginning;
secretMessage.unshift('Programming');
//console.log(secretMessage)

//removing get, right, the, first, time; replacing them with a single string: know
/* console.log(secretMessage.indexOf('get'))
console.log(secretMessage.indexOf('time')) */
secretMessage.splice(6, 5, 'know')
//console.log(secretMessage)

//Joining stings to sentence
console.log(secretMessage.join())