// OS MODULE
const os = require('os');

// GET USER-INFO by userInfo() Module
// console.log(os.userInfo());

// GET HOME-DIRECTORY by homedir() Module
// console.log(os.homedir());

// GET HOST-NAME by hostname() Module
// console.log(os.hostname());

// GET TOTAL-MEMORY by totalmem() Module
// console.log(os.totalmem());

// GET FREE-MEMORY by freemem() Module
// console.log(os.freemem());

// console.log(__dirname);
// console.log(__filename);

const path = require('path');

// GET-EXTENSION NAME
const extensionName = path.extname('index.html');
// console.log(extensionName);

const joinName = path.join(__dirname + '/views');
console.log(joinName);
