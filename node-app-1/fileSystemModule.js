const fs = require('fs');

fs.readdir('./', (err, result) => {
    if (err){
        console.log('Error', err);
    }
    else{
     console.log("Result",result);
    }
})
