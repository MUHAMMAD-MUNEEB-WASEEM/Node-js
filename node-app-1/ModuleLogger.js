var url = "http://mylogger.io/log";

function log(message){
    //send an http request
    console.log(message)
}

// module.exports.log = log;
//or module.export.log = name-of-your-choice-to-be-used-in-other-file;

//exporting function directly

module.exports = log;