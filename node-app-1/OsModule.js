const os = require('os');

const freeMemory = os.freemem();
console.log(freeMemory)

const totalMemory = os.totalmem();
console.log(totalMemory)

//Template string 

console.log(`free memory ${freeMemory}`)