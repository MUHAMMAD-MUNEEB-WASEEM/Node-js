function Name(name){
    console.log("Name is:", name);
}

Name("muneeb");

//importing logger module

//first method when exporting using module.export.log=log

// const logger = require('./ModuleLogger');

// console.log(logger);

// logger.log("muneeb")

//Second method when exporting module.exports = log (function)

//importing log function

const log = require('./ModuleLogger')
log("message")